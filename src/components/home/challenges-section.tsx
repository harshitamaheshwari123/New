import FadeIn from "../ui/fade-in";
import Image from "next/image";

const challenges = [
  {
    title: "Lack of Career Pathways",
    description: "Lack of structured career pathways in political consulting, public policy, and governance for students.",
  },
  {
    title: "Limited Access to Opportunities",
    description: "No clear guidance on how to get internships/fellowships (MP/MLA offices, think tanks, consulting firms).",
  },
  {
    title: "Skill Gaps",
    description: "Students struggle with resumes, SOPs, case studies, and interview prep to this niche sector.",
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
          <FadeIn delay="duration-1000">
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed italic">
              Students lack a clear entry into politics and governance.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <FadeIn key={index} delay={`duration-${500 + index * 300}`}>
              <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/20 h-full flex flex-col transition-transform hover:-translate-y-2">
                <h4 className="text-xl font-headline font-bold text-primary mb-4 pb-2 border-b-2 border-accent">
                  {challenge.title}
                </h4>
                <p className="text-muted-foreground text-base flex-grow">{challenge.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
