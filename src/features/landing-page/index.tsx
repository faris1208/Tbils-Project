import React from "react";
import LandingPageHero from "./landing-hero";
import TicketHero from "../homepage/components/ticket";
import WhyBuyFromTbils from "../homepage/components/whybuy-from-tbils";
import HeroServices from "../homepage/components/services";

export default function LandingPage() {
  return (
    <div>
      <LandingPageHero />
      <TicketHero />
      <WhyBuyFromTbils />
      <HeroServices />
    </div>
  );
}
