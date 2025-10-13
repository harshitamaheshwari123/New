"use client";
import { useEffect, useRef, useState } from "react";
import FadeIn from "../ui/fade-in";

const topImpacts = [
  {
    value: 4,
    suffix: "",
    title: "MLA clients in Bihar election",
  },
  {
    value: 10,
    suffix: "",
    title: "Interns placed in two MP offices",
  },
  {
    value: 5,
    suffix: "",
    title:
      "Interns contributing to tech governance in district Magistrate offices",
  },
];

const bottomImpacts = [
  {
    description:
      "10 Ex- UPSC Aspirants  are part of our UPSC Cohort who appeared in the mains atleast once, 3 already placed in PC firms",
  },
  {
    description:
      "Our work connects students, young professionals, and leaders, creating pathways for careers in politics, governance, and public policy.",
  },
];

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
      }

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
  };

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
    <section
      id="impact"
      className="relative w-full py-12 md:py-16 lg:py-20 bg-background"
    >
      <div className="absolute inset-0 bg-white/50" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583407386527-820c9281cfd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBwYXJsaWFtZW50JTIwZ292ZXJubWVudHxlbnwwfHx8fDE3NTk0MjM5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10 grayscale"></div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <FadeIn>
            <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
              Impact So Far
            </h2>
          </FadeIn>
          <FadeIn delay="duration-700">
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed bg-background/80 p-2 rounded">
              We have built a strong base of active participation and practical
              exposure in politics and governance.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {topImpacts.map((item, index) => (
            <FadeIn key={index} delay={`duration-${500 + index * 200}`}>
              <div className="text-center p-6 bg-primary shadow-lg rounded-xl h-full flex flex-col justify-center">
                <Counter value={item.value} suffix={item.suffix} />
                <h3 className="mb-2 mt-4 text-xl font-semibold text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bottomImpacts.map((item, index) => (
            <FadeIn key={index} delay={`duration-${900 + index * 200}`}>
              <div className="p-6 bg-background border border-foreground/30 shadow-lg rounded-xl h-full flex items-center">
                <p className="text-muted-foreground text-lg">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
