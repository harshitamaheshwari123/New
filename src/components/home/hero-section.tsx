import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Logo, WaveTop, WaveBottom } from '@/components/icons';
import { Button } from '../ui/button';
import Link from 'next/link';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'parliament-background');

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] lg:h-dvh flex items-center justify-center text-center overflow-hidden perspective">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center space-y-8 px-4 animate-fade-in-up">
        <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
          <Logo className="w-24 h-24 text-white drop-shadow-lg" />
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tight text-white drop-shadow-md">
          <span className="text-white">BUILDING</span>{' '}
          <span className="text-accent">BHARAT</span>
        </h1>
        <p className="max-w-3xl text-base md:text-lg lg:text-xl font-body italic text-white/90 drop-shadow">
          &quot;From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection.&quot;
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
            <Link href="#services">Our Services</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg border-white/50 backdrop-blur-sm transition-transform hover:scale-105">
             <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
