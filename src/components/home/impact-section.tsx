import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Map, Award } from "lucide-react";

const impacts = [
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    value: "50+",
    title: "Campaigns Managed",
    description: "Successfully steered campaigns across diverse constituencies with data-driven strategies."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: "10,000+",
    title: "Youth Engaged",
    description: "Mobilized and trained young volunteers, creating a powerful grassroots network."
  },
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    value: "5+",
    title: "States Covered",
    description: "Our strategic footprint extends across multiple states, adapting to regional political dynamics."
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    value: "80%",
    title: "Success Rate",
    description: "Achieved a high success rate in electoral contests and policy implementation projects."
  }
];

const ImpactSection = () => {
  return (
    <section id="impact" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Our Impact So Far</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We measure our success by the tangible results we deliver for our clients and the communities they serve.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, index) => (
            <Card key={index} className="text-center group glass-card hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary pt-6 bg-transparent">
              <CardHeader className="items-center pb-2">
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  {item.icon}
                </div>
                <p className="text-5xl font-bold font-headline text-primary group-hover:text-accent transition-colors duration-300">{item.value}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardTitle className="mb-2 text-xl font-semibold">{item.title}</CardTitle>
                <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
