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
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TechStack } from "@/components/sections/TechStack";
import { SuccessProcess } from "@/components/sections/SuccessProcess";
import { Industries } from "@/components/sections/Industries";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Portfolio } from "@/components/sections/Portfolio";
import { Products } from "@/components/sections/Products";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Careers } from "@/components/sections/Careers";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <GSAPProvider>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <WhyChooseUs />
        <TechStack />
        <SuccessProcess />
        <Industries />
        <CaseStudies />
        <Portfolio />
        <Products />
        <Testimonials />
        <Blog />
        <Careers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </GSAPProvider>
  );
}
