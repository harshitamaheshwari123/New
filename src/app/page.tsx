import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import ServicesSection from '@/components/home/services-section';
import ChallengesSection from '@/components/home/challenges-section';
import ImpactSection from '@/components/home/impact-section';
import InitiativesSection from '@/components/home/initiatives-section';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/ui/fade-in';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <main className="flex-1">
        <HeroSection />

        <FadeIn>
          <AboutSection />
        </FadeIn>

        <FadeIn>
          <ServicesSection />
        </FadeIn>
        
        <FadeIn>
          <ChallengesSection />
        </FadeIn>

        <FadeIn>
          <ImpactSection />
        </FadeIn>

        <FadeIn>
          <InitiativesSection />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
