import { useState, useEffect } from "react";

import { Container } from "./styles";

import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { Terms } from "../src/components/Terms";
import { Collaborate } from "./components/Collaborate";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <Home />
        <Terms />
        <Collaborate />
      </main>

      {showBackToTop && <BackToTop />}
      <Footer />
    </Container>
  );
}
