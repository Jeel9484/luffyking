// app/page.tsx
import { Hero } from '@/components/Hero';
import { Roadmap } from '@/components/Roadmap';
import { Tokenomics } from '@/components/Tokenomics';
import { HowToBuy } from '@/components/Howtobuy';


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Vortex Effect */}
      <Hero />

      {/* Token Distribution Section */}
      <Tokenomics />

      {/* Roadmap Timeline */}
      <Roadmap />

      {/* How to Buy Steps */}
      <HowToBuy />
     
    </main>
  );
}