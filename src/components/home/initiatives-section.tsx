import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Mic, Lightbulb } from "lucide-react";

const activeIn = ["Delhi University", "JNU", "IIT Bombay", "IIM Ahmedabad", "Ashoka University", "NLSIU Bangalore"];

const initiatives = [
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: "Policy Drafting Workshops",
    description: "Training the next generation of policymakers with hands-on workshops on legislative drafting and analysis."
  },
  {
    icon: <Mic className="h-8 w-8 text-accent" />,
    title: "Youth Parliament Program",
    description: "A national-level simulation of parliamentary proceedings to foster debate and leadership among students."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: "Governance Hackathons",
    description: "Bringing together tech enthusiasts and policy wonks to solve real-world governance challenges."
  }
];

const InitiativesSection = () => {
  return (
    <section id="initiatives" className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Public Policy & Governance Society</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Fostering a community of future leaders dedicated to public service and effective governance.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Our Initiatives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="flex flex-col text-center items-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-lg border-t-4 border-accent">
                  <div className="p-4 bg-accent/10 rounded-full mb-4">
                    {initiative.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{initiative.title}</h4>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Active In</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {activeIn.map((place, index) => (
                <Badge key={index} variant="secondary" className="text-base py-2 px-4 rounded-full transition-transform hover:scale-110 bg-primary/5 hover:bg-primary/10 text-primary">
                  {place}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
