import Hero from "@/components/home/Hero";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import SocialProof from "@/components/home/SocialProof";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesTeaser />
      <SocialProof />
    </div>
  );
}
