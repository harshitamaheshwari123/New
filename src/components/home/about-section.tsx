import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Goal } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Who We Are</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Building Bharat is a premier political and governance consulting firm dedicated to shaping the future of Indian leadership. We bridge the gap between policy and people, fostering a new generation of leaders equipped with strategic insight and a commitment to grassroots engagement.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 mt-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the catalyst for a transformed political landscape in India, where leaders are data-driven, people-centric, and dedicated to building a prosperous and inclusive Bharat.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
               <div className="rounded-full bg-primary/10 p-3">
                <Goal className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
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
