import Image from "next/image";
import FadeIn from "../ui/fade-in";

const activeIn = [
  "IIT Kharagpur",
  "NIT Jamshedpur",
  "KL University",
  "HIT Haldia",
  "NIT Silchar",
  "Vidyavardhaka College of Engineering",
  "University Institute of Technology, The University of Burdwan",
];

const initiatives = [
  "UPSC Talks",
  "Mentorship Programs",
  "Policy Podcasts",
  "Policy Research Internship Program",
  "SANSAD- Youth Indian Parliament",
  "Learning beyond the classroom",
];

const InitiativesSection = () => {
  return (
    <section
      id="initiatives"
      className="relative w-full py-12 md:py-16 lg:py-20 bg-secondary/30 overflow-hidden"
    >
      <Image
        src="https://picsum.photos/seed/parliament-fade/1920/1080"
        alt="Faded Parliament Background"
        fill
        className="object-cover opacity-10"
        data-ai-hint="indian parliament government"
      />

      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-body font-bold tracking-tight text-primary">
              Public Policy and Governance Society
            </h2>
          </FadeIn>
          <FadeIn delay="duration-700">
            <p className="text-lg font-headline tracking-widest text-muted-foreground">
              EMPOWER. INSPIRE. TRANSFORM.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay="duration-1000">
            <div className="border border-foreground/30 p-6 mb-12 text-center bg-background/50 backdrop-blur-sm rounded-lg shadow-sm">
              <p className="text-lg text-muted-foreground">
                Our sister{" "}
                <strong className="font-semibold text-foreground">
                  India's largest student-led organization
                </strong>
                , is active in 10 colleges across India with the aim of engaging
                youth in shaping better governance and policy solutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn>
              <div className="border border-foreground/30 rounded-lg shadow-lg bg-background/50 backdrop-blur-sm h-full">
                <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
                  <h3 className="text-xl font-headline font-bold text-center">
                    Public Policy and Governance Society active in:
                  </h3>
                </div>
                <ul className="p-6 space-y-2">
                  {activeIn.map((place, index) => (
                    <li key={index} className="text-muted-foreground">
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay="duration-700">
              <div className="border border-foreground/30 rounded-lg shadow-lg bg-background/50 backdrop-blur-sm h-full">
                <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
                  <h3 className="text-xl font-headline font-bold text-center">
                    Our Initiatives
                  </h3>
                </div>
                <ul className="p-6 space-y-2">
                  {initiatives.map((initiative, index) => (
                    <li key={index} className="text-muted-foreground">
                      {initiative}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-primary opacity-10">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="4" />
          <circle cx="40" cy="20" r="4" />
          <circle cx="60" cy="20" r="4" />
          <circle cx="80" cy="20" r="4" />
          <circle cx="20" cy="40" r="4" />
          <circle cx="40" cy="40" r="4" />
          <circle cx="60" cy="40" r="4" />
          <circle cx="80" cy="40" r="4" />
          <circle cx="20" cy="60" r="4" />
          <circle cx="40" cy="60" r="4" />
          <circle cx="60" cy="60" r="4" />
          <circle cx="80" cy="60" r="4" />
          <circle cx="20" cy="80" r="4" />
          <circle cx="40" cy="80" r="4" />
          <circle cx="60" cy="80" r="4" />
          <circle cx="80" cy="80" r="4" />
        </svg>
      </div>
    </section>
  );
};

export default InitiativesSection;
