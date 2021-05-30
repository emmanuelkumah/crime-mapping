import React from "react";
import FooterSection from "../FooterSection";
import HeroSection from "../HeroSection";
import MainSection from "../MainSection";

function Home() {
  return (
    <section>
      <HeroSection />
      <main>
        <MainSection />
      </main>
      <FooterSection />
    </section>
  );
}

export default Home;
