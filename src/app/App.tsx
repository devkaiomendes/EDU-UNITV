import { Hero } from "../components/sections/Hero";
import { PlansIntro } from "../components/sections/PlansIntro";
import { TutoriaisVip } from "../components/sections/TutoriaisVip";
import { DicasPerformance } from "../components/sections/DicasPerformance";
import { FAQ } from "../components/sections/FAQ";
import { WhatsAppButton } from "../components/layout/WhatsAppButton";

import { MainLayout } from "../layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Hero />

      <PlansIntro />

      <TutoriaisVip />

      <DicasPerformance />

      <FAQ />

      <WhatsAppButton />
    </MainLayout>
  );
}

export default App;