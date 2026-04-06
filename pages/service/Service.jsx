import React from "react";
import ServiceHero from "./ServiceHero";
import ServicesOverview from "./ServicesOverview";
import ServicesCarousel from "./ServiceCarousel";
import WorkflowSection from "./WorkFlowSection";
import ServiceInteractiveList from "./ServiceInterativeList";
import AiBreakthroughSection from "./AiBreakingthroughSection";

const Service = () => {
  return (
    <div>
      <ServiceHero />
      <ServicesOverview />
      <ServicesCarousel />
      <WorkflowSection />
      <ServiceInteractiveList />
      <AiBreakthroughSection />
    </div>
  );
};

export default Service;
