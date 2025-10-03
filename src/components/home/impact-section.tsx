'use client';
import { TrendingUp, Users, Map, Award } from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import FadeIn from "../ui/fade-in";

const impacts = [
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    value: 50,
    suffix: "+",
    title: "Campaigns Managed",
    description: "Successfully steered campaigns across diverse constituencies with data-driven strategies."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: 10000,
    suffix: "+",
    title: "Youth Engaged",
    description: "Mobilized and trained young volunteers, creating a powerful grassroots network."
  },
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    value: 5,
    suffix: "+",
    title: "States Covered",
    description: "Our strategic footprint extends across multiple states, adapting to regional political dynamics."
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    value: 80,
    suffix: "%",
    title: "Success Rate",
    description: "Achieved a high success rate in electoral contests and policy implementation projects."
  }
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
      if (start === end) return;

      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isIntersecting, value]);

  return (
    <span ref={ref} className="text-5xl font-bold font-headline text-primary group-hover:text-accent transition-colors duration-300">
      {count.toLocaleString()}
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
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};


const ImpactSection = () => {
  return (
    <section id="impact" className="w-full py-24 md:py-32 lg:py-40 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Our Impact So Far</h2>
          </FadeIn>
          <FadeIn delay="duration-700">
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              We measure our success by the tangible results we deliver for our clients and the communities they serve.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, index) => (
            <FadeIn key={index} delay={`duration-${500 + index * 200}`}>
              <div className="text-center group p-6 hover:-translate-y-2 transition-all duration-300 border-b-4 border-primary bg-background shadow-lg rounded-xl h-full">
                <div className="flex flex-col items-center h-full">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <Counter value={item.value} suffix={item.suffix} />
                  <h3 className="mb-2 mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
