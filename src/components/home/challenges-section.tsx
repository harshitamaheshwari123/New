import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Shuffle, DoorOpen, Archive, BarChart, Cpu } from "lucide-react";

const challenges = {
  political: [
    {
      title: "Expensive Elite Consulting",
      description: "High-cost consulting services are often inaccessible to emerging leaders and smaller parties.",
      icon: <DollarSign className="h-6 w-6 text-accent" />,
    },
    {
      title: "Unstructured Campaigning",
      description: "Many campaigns lack a data-driven strategy, relying on intuition over analytics.",
      icon: <Shuffle className="h-6 w-6 text-accent" />,
    },
    {
      title: "Lack of Youth Entry Points",
      description: "Young, talented individuals find it difficult to enter and navigate the political ecosystem.",
      icon: <DoorOpen className="h-6 w-6 text-accent" />,
    },
  ],
  governance: [
    {
      title: "Outdated Governance Systems",
      description: "Inefficient, paper-based processes hinder effective public service delivery.",
      icon: <Archive className="h-6 w-6 text-primary" />,
    },
    {
      title: "Lack of Real-Time Data",
      description: "Policymakers often lack timely data for informed decision-making and crisis response.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
    },
    {
      title: "No Structured Role for Youth in Tech-Gov",
      description: "The potential of young tech talent is underutilized in modernizing governance.",
      icon: <Cpu className="h-6 w-6 text-primary" />,
    },
  ],
};

const ChallengesSection = () => {
  return (
    <section id="challenges" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Problems We Solve</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We tackle the critical challenges that hinder political and administrative progress in India.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-center text-accent">Political Consulting</h3>
            <div className="space-y-4">
              {challenges.political.map((challenge, index) => (
                <Card key={index} className="transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-accent/10 rounded-full">{challenge.icon}</div>
                    <CardTitle className="text-lg font-semibold">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-center text-primary">Governance Consulting</h3>
            <div className="space-y-4">
              {challenges.governance.map((challenge, index) => (
                <Card key={index} className="transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-primary/10 rounded-full">{challenge.icon}</div>
                    <CardTitle className="text-lg font-semibold">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
