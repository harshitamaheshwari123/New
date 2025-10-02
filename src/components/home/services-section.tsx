import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, UserCheck, Building } from "lucide-react";

const services = [
  {
    icon: <GraduationCap className="h-12 w-12 text-accent" />,
    title: "Students & Young Aspirants",
    description: "Providing mentorship, training programs, and entry-level opportunities to nurture future leaders from the ground up."
  },
  {
    icon: <UserCheck className="h-12 w-12 text-accent" />,
    title: "Politicians & Elected Representatives",
    description: "Offering strategic campaign management, communication strategies, and data analytics to secure electoral victories."
  },
  {
    icon: <Building className="h-12 w-12 text-accent" />,
    title: "Government & Administrative Bodies",
    description: "Consulting on policy implementation, e-governance solutions, and system modernization to improve public service."
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Whom We Cater To</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our expertise is tailored to support every level of the political and governance ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 flex flex-col items-center glass-card hover:-translate-y-2 transition-all duration-300 group">
              <CardHeader className="items-center z-10">
                <div className="mb-6 bg-white/50 p-4 rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">{service.icon}</div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="z-10">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
