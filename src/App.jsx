import { FiSliders } from "react-icons/fi";
import { Container } from "./styles";

import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { Search } from "../src/components/Search";
import { Button } from "../src/components/Button";

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Search />
      <Button icon={FiSliders} title="Filtrar" />
    </Container>
  );
}
