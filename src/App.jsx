import { Container, Main, Cards } from "./styles";

import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { SearchOptions } from "./components/SearchOptions";
import { Card } from "./components/Card";

export default function App() {
  return (
    <Container>
      <Header />

      <Main>
        <Home />
        <SearchOptions />

        <Cards>
          <Card term="Racismo algorítmico" />
          <Card term="Racismo algorítmico" />
          <Card
            isFlipped
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          cumque in animi fuga impedit ad non pariatur odit, dignissimos dolores
          facere nisi distinctio mollitia odio quod et maxime fugiat maiores!"
            materialUrl="https://a.co/d/7emsLO1"
            material="Racismo algorítmico: inteligência artificial e discriminação nas redes digitais"
            authorUrl="https://www.linkedin.com/in/tarciziosilva/"
            author="Tarcízio Silva"
          />
          <Card term="Racismo algorítmico" />
        </Cards>
      </Main>
    </Container>
  );
}
