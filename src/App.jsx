import { Container, Main } from "./styles";

import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { SearchOptions } from "./components/SearchOptions";

export default function App() {
  return (
    <Container>
      <Header />

      <Main>
        <Home />
        <SearchOptions />
      </Main>
    </Container>
  );
}
