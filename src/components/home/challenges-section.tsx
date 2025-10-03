import FadeIn from "../ui/fade-in";
import Image from "next/image";

const academyChallenges = [
  {
    title: "Lack of Career Pathways",
    description: "Young individuals passionate about governance and policy often struggle to find structured entry points into the field.",
  },
  {
    title: "Limited Access to Opportunities",
    description: "Practical experience, mentorship, and networking opportunities in the political and governance sectors are scarce.",
  },
  {
    title: "Skill Gaps",
    description: "There's a disconnect between academic knowledge and the practical skills required to be effective in political and policy roles.",
  },
];

const consultingChallenges = [
  {
    title: "Expensive, Elite Consulting",
    description: "Established firms like I-PAC/Nation with NaMo are large and inaccessible. We offer lean, affordable, and youth-driven consulting models for smaller parties and individual leaders.",
  },
  {
    title: "Unstructured Campaigning",
    description: "Most local and regional leaders still rely on intuition, family, or outdated methods. We're bringing data-driven strategy and structured frameworks.",
  },
  {
    title: "Lack of Youth Entry Points",
    description: "Thousands of young people want to work in politics but have no clear path. We create career pipelines into consulting, MP/MLA offices, and governance roles.",
  },
];


const ChallengesSection = () => {
  return (
    <section id="challenges" className="relative w-full py-24 md:py-32 lg:py-40 bg-secondary/30 overflow-hidden">
        <Image
            src="https://picsum.photos/seed/challenge-bg/1920/1080"
            alt="Faded background texture"
            fill
            className="object-cover opacity-10"
            data-ai-hint="parliament government background"
        />
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[60px] md:h-[120px]">
                <path d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,58.7C560,43,640,53,720,80C800,107,880,149,960,154.7C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" fill="hsl(var(--accent))" fillOpacity="1"></path>
            </svg>
        </div>

      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">The Problem We Solve</h2>
          </FadeIn>
          <FadeIn delay="duration-700">
            <div className="inline-block bg-background px-4 py-2 rounded-lg shadow">
              <h3 className="text-2xl font-body font-bold text-foreground">Building Bharat Academy</h3>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {academyChallenges.map((challenge, index) => (
            <FadeIn key={index} delay={`duration-${500 + index * 300}`}>
              <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/20 h-full flex flex-col transition-transform hover:-translate-y-2">
                <div className="bg-primary text-primary-foreground py-2 px-4 rounded-md mb-6 shadow-md -mt-12 mx-auto">
                  <h4 className="text-lg font-headline font-bold text-center">
                    {challenge.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-base flex-grow text-center">{challenge.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-24 mb-16">
          <FadeIn>
            <div className="inline-block bg-background px-4 py-2 rounded-lg shadow">
              <h3 className="text-2xl font-body font-bold text-foreground">Building Bharat Political Consulting</h3>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {consultingChallenges.map((challenge, index) => (
            <FadeIn key={index} delay={`duration-${500 + index * 300}`}>
              <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/20 h-full flex flex-col transition-transform hover:-translate-y-2">
                <div className="bg-primary text-primary-foreground py-2 px-4 rounded-md mb-6 shadow-md -mt-12 mx-auto">
                  <h4 className="text-lg font-headline font-bold text-center">
                    {challenge.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-base flex-grow text-center">{challenge.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-primary opacity-10">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="4"/>
          <circle cx="40" cy="20" r="4"/>
          <circle cx="60" cy="20" r="4"/>
          <circle cx="80" cy="20" r="4"/>
          <circle cx="20" cy="40" r="4"/>
          <circle cx="40" cy="40" r="4"/>
          <circle cx="60" cy="40" r="4"/>
          <circle cx="80" cy="40" r="4"/>
          <circle cx="20" cy="60" r="4"/>
          <circle cx="40" cy="60" r="4"/>
          <circle cx="60"cy="60" r="4"/>
          <circle cx="80" cy="60" r="4"/>
          <circle cx="20" cy="80" r="4"/>
          <circle cx="40" cy="80" r="4"/>
          <circle cx="60" cy="80" r="4"/>
          <circle cx="80" cy="80" r="4"/>
        </svg>
      </div>
    </section>
  );
};

export default ChallengesSection;
