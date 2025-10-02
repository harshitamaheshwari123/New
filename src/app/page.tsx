import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import ServicesSection from '@/components/home/services-section';
import ChallengesSection from '@/components/home/challenges-section';
import ImpactSection from '@/components/home/impact-section';
import InitiativesSection from '@/components/home/initiatives-section';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/ui/fade-in';
import { WaveBottom, WaveTop } from '@/components/icons';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <main className="flex-1">
        <HeroSection />

        <div className="relative">
          <WaveTop className="absolute -top-1 w-full h-auto text-primary/10" />
          <FadeIn>
            <AboutSection />
          </FadeIn>
        </div>

        <div className="relative bg-gray-50 dark:bg-card">
          <WaveTop className="absolute -top-px w-full h-auto text-background" />
           <FadeIn>
            <ServicesSection />
          </FadeIn>
           <WaveBottom className="absolute -bottom-px w-full h-auto text-background" />
        </div>
        
        <FadeIn>
          <ChallengesSection />
        </FadeIn>

        <div className="relative bg-primary/5 dark:bg-card">
           <WaveTop className="absolute -top-px w-full h-auto text-background" />
            <FadeIn>
              <ImpactSection />
            </FadeIn>
           <WaveBottom className="absolute -bottom-px w-full h-auto text-white dark:text-card" />
        </div>

        <FadeIn>
          <InitiativesSection />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
