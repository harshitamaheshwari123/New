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
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent"></div>
      
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[120px] md:h-[180px]">
          <path d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,58.7C560,43,640,53,720,80C800,107,880,149,960,154.7C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" fill="hsl(var(--accent))" fillOpacity="0.9"></path>
          <path d="M0,32L40,53.3C80,75,160,117,240,117.3C320,117,400,75,480,64C560,53,640,75,720,96C800,117,880,139,960,138.7C1040,139,1120,117,1200,96C1280,75,1360,53,1400,42.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" fill="hsl(var(--accent))"></path>
        </svg>
      </div>

      <div className="relative z-20 flex flex-col items-center space-y-6 px-4 animate-fade-in-up mt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tight text-white drop-shadow-lg">
          <span className="text-primary">BUILDING</span>{' '}
          <span className="text-accent">BHARAT</span>
        </h1>
        <p className="max-w-3xl text-base md:text-lg lg:text-xl font-body italic text-white/90 drop-shadow-sm font-semibold">
          &quot;From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection.&quot;
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-primary text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
            <Link href="#services">Our Services</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg border-white/30 backdrop-blur-sm transition-transform hover:scale-105">
             <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[120px] md:h-[180px]">
            <path d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,58.7C560,43,640,53,720,80C800,107,880,149,960,154.7C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z" fill="hsl(var(--background))"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
