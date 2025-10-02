import { Logo } from '@/components/icons';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const parliamentImage = PlaceHolderImages.find(img => img.id === 'parliament-background');

const HeroSection = () => {
  return (
    <section className="relative w-full h-dvh min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      {parliamentImage && (
        <Image
          src={parliamentImage.imageUrl}
          alt={parliamentImage.description}
          fill
          className="object-cover grayscale"
          data-ai-hint={parliamentImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-background/70"></div>
      
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[120px] md:h-[180px]">
          <path d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,58.7C560,43,640,53,720,80C800,107,880,149,960,154.7C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" fill="hsl(var(--accent))" fillOpacity="0.8"></path>
          <path d="M0,32L40,53.3C80,75,160,117,240,117.3C320,117,400,75,480,64C560,53,640,75,720,96C800,117,880,139,960,138.7C1040,139,1120,117,1200,96C1280,75,1360,53,1400,42.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" fill="hsl(var(--accent))"></path>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-6 px-4 animate-fade-in-up">
        <div className="rounded-full bg-white/30 p-4 backdrop-blur-sm border border-white/40 shadow-2xl">
          <Logo className="w-24 h-24 text-primary drop-shadow-lg" />
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tight text-white drop-shadow-md">
          <span className="text-primary">BUILDING</span>{' '}
          <span className="text-accent">BHARAT</span>
        </h1>
        <p className="max-w-3xl text-base md:text-lg lg:text-xl font-body italic text-foreground/90 drop-shadow-sm font-semibold">
          &quot;From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection.&quot;
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
            <Link href="#services">Our Services</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg border-white/30 backdrop-blur-sm transition-transform hover:scale-105">
             <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[120px] md:h-[180px]">
            <path d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,58.7C560,43,640,53,720,80C800,107,880,149,960,154.7C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" fill="hsl(var(--accent))" fillOpacity="0.8"></path>
            <path d="M0,32L40,53.3C80,75,160,117,240,117.3C320,117,400,75,480,64C560,53,640,75,720,96C800,117,880,139,960,138.7C1040,139,1120,117,1200,96C1280,75,1360,53,1400,42.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" fill="hsl(var(--accent))"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
