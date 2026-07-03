import { GSAPProvider } from "@/components/animations/GSAPProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { MouseGlow } from "@/components/effects/MouseGlow";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { SuccessProcess } from "@/components/sections/SuccessProcess";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <GSAPProvider>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <main className="pb-20 sm:pb-0">
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <SuccessProcess />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </GSAPProvider>
  );
}
