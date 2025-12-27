import { Container, Main } from "./styles";

import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { Terms } from "../src/components/Terms";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Container>
      <Header />

      <Main>
        <Home />
        <Terms />
      </Main>

      <About />

      <Footer />
    </Container>
  );
}
