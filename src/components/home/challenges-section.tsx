"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FadeIn from "../ui/fade-in";
import Image from "next/image";

const challenges = {
  academy: [
    {
      title: "Lack of Career Pathways",
      description:
        "Young individuals passionate about governance and policy often struggle to find structured entry points into the field.",
    },
    {
      title: "Limited Access to Opportunities",
      description:
        "Practical experience, mentorship, and networking opportunities in the political and governance sectors are scarce.",
    },
    {
      title: "Skill Gaps",
      description:
        "There's a disconnect between academic knowledge and the practical skills required to be effective in political and policy roles.",
    },
  ],
  political: [
    {
      title: "Expensive, Elite Consulting",
      description:
        "Established firms are large and inaccessible. We offer lean, affordable, youth-driven consulting for smaller parties and individual leaders.",
    },
    {
      title: "Unstructured Campaigning",
      description:
        "Most local leaders still rely on intuition or outdated methods. We bring data-driven strategy and structured frameworks to the forefront.",
    },
    {
      title: "Lack of Youth Entry Points",
      description:
        "Thousands of young people want to work in politics but have no clear path. We create career pipelines into consulting and governance roles.",
    },
  ],
  governance: [
    {
      title: "Outdated Governance Systems",
      description:
        "Many government offices still run on paper files and manual processes. We introduce and implement digital-first governance solutions.",
    },
    {
      title: "Lack of Real-Time Data",
      description:
        "Policy decisions are often made on outdated surveys. We create real-time citizen feedback loops and AI-driven data dashboards.",
    },
    {
      title: "No Structured Role for Youth",
      description:
        "While youth want to contribute, there's no framework. We design fellowships and live projects in AI-for-Gov, data analysis, and civic-tech.",
    },
  ],
};

const ChallengesSection = () => {
  return (
    <section
      id="challenges"
      className="relative w-full overflow-hidden bg-secondary/30 py-12 md:py-16 lg:py-20"
    >
      <Image
        src="https://picsum.photos/seed/challenge-bg/1920/1080"
        alt="Faded background texture"
        fill
        className="object-cover opacity-10"
        data-ai-hint="parliament government background"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 lg:mb-12 flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
          <FadeIn>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-primary leading-tight">
              The Problem We Solve
            </h2>
          </FadeIn>
          <FadeIn delay="duration-700">
            <p className="max-w-3xl text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
              We tackle critical gaps across the political and governance
              landscape, from nurturing new talent to modernizing established
              systems.
            </p>
          </FadeIn>
        </div>

        <Tabs defaultValue="political" className="w-full max-w-6xl mx-auto">
          <FadeIn>
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 bg-background/70 backdrop-blur-sm p-1 sm:p-2 h-auto rounded-xl shadow-md border border-primary/10 gap-1">
              <TabsTrigger
                value="political"
                className="rounded-lg text-xs sm:text-sm md:text-base py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap sm:whitespace-normal"
              >
                <span className="hidden sm:inline">Political Consulting</span>
                <span className="sm:hidden">Political</span>
              </TabsTrigger>
              <TabsTrigger
                value="academy"
                className="rounded-lg text-xs sm:text-sm md:text-base py-2 sm:py-3 px-2 sm:px-4"
              >
                Academy
              </TabsTrigger>
              <TabsTrigger
                value="governance"
                className="rounded-lg text-xs sm:text-sm md:text-base py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap sm:whitespace-normal"
              >
                <span className="hidden sm:inline">Governance Consulting</span>
                <span className="sm:hidden">Governance</span>
              </TabsTrigger>
            </TabsList>
          </FadeIn>
          <FadeIn className="mt-6 sm:mt-8" delay="duration-700">
            <TabsContent value="political">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {challenges.political.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-col rounded-xl border border-primary/20 bg-background/80 p-4 sm:p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <h3 className="mb-3 font-headline text-base sm:text-lg font-bold text-primary leading-tight">
                      {challenge.title}
                    </h3>
                    <p className="flex-grow text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="academy">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {challenges.academy.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-col rounded-xl border border-primary/20 bg-background/80 p-4 sm:p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <h3 className="mb-3 font-headline text-base sm:text-lg font-bold text-primary leading-tight">
                      {challenge.title}
                    </h3>
                    <p className="flex-grow text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="governance">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {challenges.governance.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-col rounded-xl border border-primary/20 bg-background/80 p-4 sm:p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <h3 className="mb-3 font-headline text-base sm:text-lg font-bold text-primary leading-tight">
                      {challenge.title}
                    </h3>
                    <p className="flex-grow text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </FadeIn>
        </Tabs>
      </div>
    </section>
  );
};

export default ChallengesSection;
