import { Container } from "./styles";

import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { Terms } from "../src/components/Terms";
import { Collaborate } from "./components/Collaborate";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Container>
      <Header />

      <main>
        <Home />
        <Terms />
        <Collaborate />
      </main>

      <BackToTop />
      <Footer />
    </Container>
  );
}
