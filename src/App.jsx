import { Container } from "./styles";

import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { Search } from "../src/components/Search";

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Search />
    </Container>
  );
}
