import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Goal } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Who We Are</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Building Bharat is a premier political and governance consulting firm dedicated to shaping the future of Indian leadership. We bridge the gap between policy and people, fostering a new generation of leaders equipped with strategic insight and a commitment to grassroots engagement.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 mt-16">
          <Card className="glass-card shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 group">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3 ring-4 ring-primary/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                To be the catalyst for a transformed political landscape in India, where leaders are data-driven, people-centric, and dedicated to building a prosperous and inclusive Bharat.
              </p>
            </CardContent>
          </Card>
          <Card className="glass-card shadow-2xl hover:shadow-accent/20 transition-all duration-500 transform hover:-translate-y-2 group">
            <CardHeader className="flex flex-row items-center gap-4">
               <div className="rounded-full bg-accent/10 p-3 ring-4 ring-accent/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/20">
                <Goal className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                To empower political aspirants and representatives with cutting-edge strategic tools, data analytics, and effective communication techniques, enabling them to win elections and govern effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
