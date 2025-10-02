import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Shuffle, DoorOpen, Archive, BarChart, Cpu } from "lucide-react";

const challenges = {
  political: [
    {
      title: "Expensive Elite Consulting",
      description: "High-cost consulting services are often inaccessible to emerging leaders and smaller parties.",
      icon: <DollarSign className="h-8 w-8 text-accent" />,
    },
    {
      title: "Unstructured Campaigning",
      description: "Many campaigns lack a data-driven strategy, relying on intuition over analytics.",
      icon: <Shuffle className="h-8 w-8 text-accent" />,
    },
    {
      title: "Lack of Youth Entry Points",
      description: "Young, talented individuals find it difficult to enter and navigate the political ecosystem.",
      icon: <DoorOpen className="h-8 w-8 text-accent" />,
    },
  ],
  governance: [
    {
      title: "Outdated Governance Systems",
      description: "Inefficient, paper-based processes hinder effective public service delivery.",
      icon: <Archive className="h-8 w-8 text-primary" />,
    },
    {
      title: "Lack of Real-Time Data",
      description: "Policymakers often lack timely data for informed decision-making and crisis response.",
      icon: <BarChart className="h-8 w-8 text-primary" />,
    },
    {
      title: "No Structured Role for Youth in Tech-Gov",
      description: "The potential of young tech talent is underutilized in modernizing governance.",
      icon: <Cpu className="h-8 w-8 text-primary" />,
    },
  ],
};

const ChallengesSection = () => {
  return (
    <section id="challenges" className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-card overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Problems We Solve</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We tackle the critical challenges that hinder political and administrative progress in India.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">

            {/* Political Consulting */}
            <div className="space-y-12">
              <h3 className="text-3xl md:text-4xl font-headline font-bold text-center text-accent">Political Consulting</h3>
              <ul className="space-y-10">
                {challenges.political.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1 p-3 bg-accent/10 rounded-full ring-4 ring-accent/20">
                      {challenge.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{challenge.title}</h4>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Governance Consulting */}
            <div className="space-y-12">
              <h3 className="text-3xl md:text-4xl font-headline font-bold text-center text-primary">Governance Consulting</h3>
              <ul className="space-y-10">
                {challenges.governance.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1 p-3 bg-primary/10 rounded-full ring-4 ring-primary/20">
                      {challenge.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{challenge.title}</h4>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ChallengesSection;
