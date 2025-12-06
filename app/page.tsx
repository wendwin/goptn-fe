"use client";
import Hero from "./components/home/Hero";
import EnteranceInfor from "./components/home/EntranceInfor";
import PremiumFeature from "./components/home/PremiumFeature";
import Footer from "./components/home/Footer";

export default function HomePage() {
  return (
    <main className="">

      <Hero />
      <EnteranceInfor/>
      <PremiumFeature />
      <Footer />
      
    </main>
  );
}
