import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Logo, WaveTop, WaveBottom } from '@/components/icons';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'parliament-background');

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] lg:h-dvh flex items-center justify-center text-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          priority
          className="object-cover grayscale"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-background" />

      <WaveTop className="absolute top-0 left-0 w-full h-auto text-accent/80" />
      <WaveBottom className="absolute bottom-0 left-0 w-full h-auto text-accent/80" />
      
      <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
        <Logo className="w-24 h-24 text-primary" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter">
          <span className="text-primary">BUILDING</span>{' '}
          <span className="text-accent">BHARAT</span>
        </h1>
        <p className="max-w-3xl text-base md:text-lg lg:text-xl font-body italic text-foreground/80">
          &quot;From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection.&quot;
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
