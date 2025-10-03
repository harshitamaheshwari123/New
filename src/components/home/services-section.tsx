import { GraduationCap, UserCheck, Building } from "lucide-react";
import FadeIn from "../ui/fade-in";

const services = [
  {
    icon: <GraduationCap className="h-10 w-10 text-accent" />,
    title: "Students & Young Aspirants",
    description: "Providing mentorship, training programs, and entry-level opportunities to nurture future leaders from the ground up."
  },
  {
    icon: <UserCheck className="h-10 w-10 text-accent" />,
    title: "Politicians & Elected Representatives",
    description: "Offering strategic campaign management, communication strategies, and data analytics to secure electoral victories."
  },
  {
    icon: <Building className="h-10 w-10 text-accent" />,
    title: "Government & Administrative Bodies",
    description: "Consulting on policy implementation, e-governance solutions, and system modernization to improve public service."
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full py-24 md:py-32 lg:py-40 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Whom We Cater To</h2>
          </FadeIn>
          <FadeIn delay="duration-700">
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Our expertise is tailored to support every level of the political and governance ecosystem.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => (
            <FadeIn key={index} delay={`duration-${500 + index * 200}`}>
              <div className="flex flex-col items-center p-6 transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="mb-6 bg-white p-5 rounded-full shadow-lg ring-4 ring-primary/10 transition-transform duration-500 hover:scale-110 hover:rotate-12">{service.icon}</div>
                <h3 className="font-headline text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground flex-grow">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
