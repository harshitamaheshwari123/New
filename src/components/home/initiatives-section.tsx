import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Mic, Lightbulb } from "lucide-react";

const activeIn = ["Delhi University", "JNU", "IIT Bombay", "IIM Ahmedabad", "Ashoka University"];

const initiatives = [
  {
    icon: <PenTool className="h-6 w-6 text-accent" />,
    title: "Policy Drafting Workshops",
    description: "Training the next generation of policymakers with hands-on workshops on legislative drafting and analysis."
  },
  {
    icon: <Mic className="h-6 w-6 text-accent" />,
    title: "Youth Parliament Program",
    description: "A national-level simulation of parliamentary proceedings to foster debate and leadership among students."
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-accent" />,
    title: "Governance Hackathons",
    description: "Bringing together tech enthusiasts and policy wonks to solve real-world governance challenges."
  }
];

const InitiativesSection = () => {
  return (
    <section id="initiatives" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Public Policy and Governance Society</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Fostering a community of future leaders dedicated to public service and effective governance.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-4">Active In:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {activeIn.map((place, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                  {place}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-center mb-6">Our Initiatives:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="flex flex-col text-center items-center">
                  <CardHeader>
                    <div className="p-3 bg-accent/10 rounded-full mb-3">
                      {initiative.icon}
                    </div>
                    <CardTitle>{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{initiative.description}</p>
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

export default InitiativesSection;
