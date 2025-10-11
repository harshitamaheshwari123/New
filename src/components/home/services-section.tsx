import { GraduationCap, UserCheck, Building } from "lucide-react";
import FadeIn from "../ui/fade-in";

const services = [
  {
    icon: <GraduationCap className="h-10 w-10 text-accent" />,
    title: (
      <>
        <span>Students & </span>
        <span className="text-foreground">Young Aspirants</span>
      </>
    ),
    titleClass: "font-sans font-extralight text-xl",
    description:
      "Mentorship, training, and opportunities to kickstart impactful careers.",
  },
  {
    icon: <UserCheck className="h-10 w-10 text-accent" />,
    title: <>Politicians & Elected Representatives</>,
    titleClass: "font-sans font-extralight text-xl",
    description:
      "Campaign strategy, communications, and analytics for electoral success.",
  },
  {
    icon: <Building className="h-10 w-10 text-accent" />,
    title: <>Government & Administrative Bodies</>,
    titleClass: "font-sans font-extralight text-xl",
    description:
      "Policy, governance, and digital solutions to modernize public services.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-16 lg:py-20 bg-secondary/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-headline font-bold tracking-tight text-primary text-balance">
              Whom We Cater To
            </h2>
          </FadeIn>
          <FadeIn delay="duration-700">
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed text-balance">
              Our expertise is tailored to support every level of the political
              and governance ecosystem.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {services.map((service, index) => (
            <FadeIn key={index} delay={`duration-${500 + index * 200}`}>
              <div className="flex flex-col items-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 h-full transform hover:-translate-y-2">
                <div className="mb-6 bg-white p-5 rounded-full shadow-md ring-4 ring-primary/10 transition-transform duration-500 hover:scale-110 hover:rotate-12">
                  {service.icon}
                </div>
                <h3
                  className={`${
                    (service as any).titleClass ?? "font-headline font-normal"
                  } text-2xl mb-3 text-balance`}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
