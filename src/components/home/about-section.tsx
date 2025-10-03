import Image from 'next/image';
import FadeIn from '../ui/fade-in';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Who We Are</h2>
            </FadeIn>
            <FadeIn delay="duration-700">
              <p className="text-muted-foreground text-lg/relaxed">
                Building Bharat is a premier political and governance consulting firm dedicated to shaping the future of Indian leadership. We bridge the gap between policy and people, fostering a new generation of leaders equipped with strategic insight and a commitment to grassroots engagement.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <FadeIn delay="duration-1000">
                <div>
                  <h3 className="font-headline text-xl font-bold text-accent mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the catalyst for a transformed political landscape in India, where leaders are data-driven, people-centric, and dedicated to building a prosperous and inclusive Bharat.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay="duration-1000" className='sm:!duration-[1200ms]'>
                <div>
                  <h3 className="font-headline text-xl font-bold text-accent mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower political aspirants and representatives with cutting-edge strategic tools, data analytics, and effective communication techniques, enabling them to win elections and govern effectively.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
          <FadeIn className="relative h-80 md:h-[500px] rounded-xl overflow-hidden shadow-2xl" delay="duration-700">
             <Image
              src="https://picsum.photos/seed/about/800/1000"
              alt="Team discussing strategy"
              fill
              className="object-cover"
              data-ai-hint="political team meeting"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
