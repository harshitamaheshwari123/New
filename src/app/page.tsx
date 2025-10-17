import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";
import ChallengesSection from "@/components/home/challenges-section";
import ImpactSection from "@/components/home/impact-section";
import InitiativesSection from "@/components/home/initiatives-section";
import Footer from "@/components/layout/footer";
import HaveQuestionsLetsTalk from "@/components/home/HaveQuestionsLetsTalk";
import Header from "@/components/layout/header";
import FadeIn from "@/components/ui/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Building Bharat - Leading political consulting and strategy services in India. We empower political journeys with expert strategy and grassroots connection.",
  keywords: [
    "political consulting India",
    "political strategy services",
    "campaign management India",
    "election consulting",
    "political marketing",
    "grassroots organizing",
    "political communication",
    "Building Bharat home",
  ],
  openGraph: {
    title: "Building Bharat - Political Consulting & Strategy Services",
    description:
      "Leading political consulting and strategy services in India. Expert guidance for political campaigns and grassroots organizing.",
    url: "https://buildingbharat.com",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Building Bharat - Political Consulting Services",
      },
    ],
  },
  twitter: {
    title: "Building Bharat - Political Consulting & Strategy Services",
    description:
      "Leading political consulting and strategy services in India. Expert guidance for political campaigns and grassroots organizing.",
    images: ["/logo.jpg"],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
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

        <HaveQuestionsLetsTalk />
      </main>
      <Footer />
    </div>
  );
}
