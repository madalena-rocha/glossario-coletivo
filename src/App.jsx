import { useState, useEffect } from "react";

import { Header } from "../src/components/Header";
import { HomeSection } from "./components/HomeSection";
import { Terms } from "../src/components/Terms";
import { ContributionSection } from "./components/ContributionSection";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";

import { Container } from "./styles";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <HomeSection />
        <Terms />
        <ContributionSection />
      </main>

      {showBackToTop && <BackToTop />}
      <Footer />
    </Container>
  );
}
