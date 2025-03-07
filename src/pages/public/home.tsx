import { AllYouNeed } from "./components/home/all-you-need";
import ConnectedBanks from "./components/home/connected-banks";
import { Faq } from "./components/home/faq";
import { FocusCardsHome } from "./components/home/focus-cards-home";
import { Hero } from "./components/home/hero";

export function HomePage() {
  return (
    <div className="mx-auto">
      <Hero />
      <AllYouNeed />
      <ConnectedBanks />
      <FocusCardsHome />
      <Faq />
    </div>
  );
}
