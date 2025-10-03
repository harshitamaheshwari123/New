'use client';
import { Briefcase, Users, Linkedin, Building2, Link } from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import FadeIn from "../ui/fade-in";

const topImpacts = [
  {
    value: 35,
    suffix: "+",
    title: "Interns at Building Bharat",
  },
  {
    value: 2,
    suffix: "",
    title: "Interns placed in two MP offices",
  },
  {
    value: 7000,
    suffix: "+",
    title: "LinkedIn Followers",
  }
];

const bottomImpacts = [
    {
        icon: <Building2 className="h-8 w-8 text-primary" />,
        description: "5 interns contributing to tech governance projects in District Magistrate offices."
    },
    {
        icon: <Link className="h-8 w-8 text-primary" />,
        description: "Our work connects students, young professionals, and leaders, creating pathways for careers in politics, governance, and public policy."
    }
]

const Counter = ({ value, suffix }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isIntersecting = useIntersectionObserver(ref);

  useEffect(() => {
    if (isIntersecting) {
      const duration = 2000;
      let start = 0;
      const end = value;
      if (start === end) {
        setCount(end);
        return;
      };

      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isIntersecting, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num;
  }

  return (
    <span ref={ref} className="text-5xl font-bold font-headline text-white">
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
};


const ImpactSection = () => {
  return (
    <section id="impact" className="relative w-full py-24 md:py-32 lg:py-40 bg-background">
       <div className="absolute inset-0 bg-white/50" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583407386527-820c9281cfd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBwYXJsaWFtZW50JTIwZ292ZXJubWVudHxlbnwwfHx8fDE3NTk0MjM5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10 grayscale"></div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[120px] md:h-[180px]">
          <path d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,58.7C560,43,640,53,720,80C800,107,880,149,960,154.7C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" fill="hsl(var(--accent))"></path>
        </svg>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Impact So Far</h2>
          </FadeIn>
          <FadeIn delay="duration-700">
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed bg-background/80 p-2 rounded">
              We have built a strong base of active participation and practical exposure in politics and governance.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {topImpacts.map((item, index) => (
            <FadeIn key={index} delay={`duration-${500 + index * 200}`}>
              <div className="text-center p-6 bg-primary shadow-lg rounded-xl h-full flex flex-col justify-center">
                  <Counter value={item.value} suffix={item.suffix} />
                  <h3 className="mb-2 mt-4 text-xl font-semibold text-primary-foreground">{item.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bottomImpacts.map((item, index) => (
                <FadeIn key={index} delay={`duration-${900 + index * 200}`}>
                    <div className="p-6 bg-background border border-foreground/30 shadow-lg rounded-xl h-full flex items-center gap-4">
                        {item.icon}
                        <p className="text-muted-foreground text-lg">{item.description}</p>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
