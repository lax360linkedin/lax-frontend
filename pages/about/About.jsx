import React from "react";
import OverviewSection from "./OverviewSection";
import MissionSection from "./MissionSection";
import VisionSection from "./VisionSection";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";
import AboutHero from "./AboutHero";
import ValueSection from "./ValueSection";

const About = () => {
  return (
    <>
      <AboutHero />
      <OverviewSection />
      <MissionSection />
      <VisionSection />
      <StatsSection />
      <ValueSection/>
      <CTASection />
    </>
  );
};

export default About;
