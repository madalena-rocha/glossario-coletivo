import { Container } from "./styles";

import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}
