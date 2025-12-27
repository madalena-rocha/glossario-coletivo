import { Container, Main } from "./styles";

import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { Terms } from "../src/components/Terms";

export default function App() {
  return (
    <Container>
      <Header />

      <Main>
        <Home />
        <Terms />
      </Main>
    </Container>
  );
}
