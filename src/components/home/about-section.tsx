import FadeIn from "../ui/fade-in";
import { Eye, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full py-12 md:py-16 lg:py-20 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-primary">
              Who We Are
            </h2>
          </FadeIn>
          <FadeIn delay="duration-500">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Building Bharat empowers leaders through strategic governance,
              data, and grassroots engagement.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Vision Card */}
          <FadeIn delay="duration-700">
            <div className="flex flex-col gap-6 p-10 rounded-3xl bg-background shadow-lg border border-border transition-shadow duration-300 hover:shadow-xl">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground text-lg">
                A new India led by informed, people-focused leaders building an
                inclusive Bharat.
              </p>
            </div>
          </FadeIn>

          {/* Mission Card */}
          <FadeIn delay="duration-900">
            <div className="flex flex-col gap-6 p-10 rounded-3xl bg-background shadow-lg border border-border transition-shadow duration-300 hover:shadow-xl">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Equipping political leaders with strategy, data, and tools to
                win and govern effectively.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
