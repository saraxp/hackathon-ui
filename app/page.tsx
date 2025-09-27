import React from "react";
import Hero from "./LandingPageComponents/Hero";
import Features from "./LandingPageComponents/Features";
import Footer from "./LandingPageComponents/Footer";
import { LandingNavbar } from "./components/LandingNavBar";

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      <LandingNavbar/>
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
