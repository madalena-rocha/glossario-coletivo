import { Container } from "./styles";

import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { Input } from "../src/components/Input";

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Input placeholder="Digite aqui..." />
    </Container>
  );
}
