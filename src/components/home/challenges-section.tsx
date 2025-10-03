'use client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import FadeIn from '../ui/fade-in';
import Image from 'next/image';

const challenges = {
  academy: [
    {
      title: 'Lack of Career Pathways',
      description:
        'Young individuals passionate about governance and policy often struggle to find structured entry points into the field.',
    },
    {
      title: 'Limited Access to Opportunities',
      description:
        'Practical experience, mentorship, and networking opportunities in the political and governance sectors are scarce.',
    },
    {
      title: 'Skill Gaps',
      description:
        "There's a disconnect between academic knowledge and the practical skills required to be effective in political and policy roles.",
    },
  ],
  political: [
    {
      title: 'Expensive, Elite Consulting',
      description:
        'Established firms are large and inaccessible. We offer lean, affordable, youth-driven consulting for smaller parties and individual leaders.',
    },
    {
      title: 'Unstructured Campaigning',
      description:
        'Most local leaders still rely on intuition or outdated methods. We bring data-driven strategy and structured frameworks to the forefront.',
    },
    {
      title: 'Lack of Youth Entry Points',
      description:
        'Thousands of young people want to work in politics but have no clear path. We create career pipelines into consulting and governance roles.',
    },
  ],
  governance: [
    {
      title: 'Outdated Governance Systems',
      description:
        'Many government offices still run on paper files and manual processes. We introduce and implement digital-first governance solutions.',
    },
    {
      title: 'Lack of Real-Time Data',
      description:
        'Policy decisions are often made on outdated surveys. We create real-time citizen feedback loops and AI-driven data dashboards.',
    },
    {
      title: 'No Structured Role for Youth',
      description:
        "While youth want to contribute, there's no framework. We design fellowships and live projects in AI-for-Gov, data analysis, and civic-tech.",
    },
  ],
};

const ChallengesSection = () => {
  return (
    <section
      id="challenges"
      className="relative w-full overflow-hidden bg-secondary/30 py-24 md:py-32 lg:py-40"
    >
      <Image
        src="https://picsum.photos/seed/challenge-bg/1920/1080"
        alt="Faded background texture"
        fill
        className="object-cover opacity-10"
        data-ai-hint="parliament government background"
      />
      <div className="absolute top-0 left-0 z-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block h-[60px] w-full md:h-[120px]"
        >
          <path
            d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,58.7C560,43,640,53,720,80C800,107,880,149,960,154.7C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill="hsl(var(--accent))"
            fillOpacity="1"
          ></path>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center justify-center space-y-4 text-center">
          <FadeIn>
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
              The Problem We Solve
            </h2>
          </FadeIn>
          <FadeIn delay="duration-700">
            <p className="max-w-3xl text-muted-foreground md:text-lg/relaxed">
              We tackle critical gaps across the political and governance
              landscape, from nurturing new talent to modernizing established
              systems.
            </p>
          </FadeIn>
        </div>

        <Tabs defaultValue="academy" className="w-full max-w-4xl mx-auto">
          <FadeIn>
            <TabsList className="grid w-full grid-cols-3 bg-background/70 backdrop-blur-sm p-2 h-auto rounded-xl shadow-md border border-primary/10">
              <TabsTrigger value="academy" className="rounded-lg text-sm md:text-base py-3">
                Academy
              </TabsTrigger>
              <TabsTrigger value="political" className="rounded-lg text-sm md:text-base py-3">
                Political Consulting
              </TabsTrigger>
              <TabsTrigger value="governance" className="rounded-lg text-sm md:text-base py-3">
                Governance Consulting
              </TabsTrigger>
            </TabsList>
          </FadeIn>
          <FadeIn className="mt-8" delay="duration-700">
            <TabsContent value="academy">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {challenges.academy.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-col rounded-xl border border-primary/20 bg-background/80 p-6 shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-2"
                  >
                    <h3 className="mb-3 font-headline text-lg font-bold text-primary">
                      {challenge.title}
                    </h3>
                    <p className="flex-grow text-muted-foreground">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="political">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {challenges.political.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-col rounded-xl border border-primary/20 bg-background/80 p-6 shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-2"
                  >
                    <h3 className="mb-3 font-headline text-lg font-bold text-primary">
                      {challenge.title}
                    </h3>
                    <p className="flex-grow text-muted-foreground">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="governance">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {challenges.governance.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-col rounded-xl border border-primary/20 bg-background/80 p-6 shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-2"
                  >
                    <h3 className="mb-3 font-headline text-lg font-bold text-primary">
                      {challenge.title}
                    </h3>
                    <p className="flex-grow text-muted-foreground">
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
