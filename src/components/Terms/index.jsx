import { Container, Cards } from "./styles";

import { SearchOptions } from "../SearchOptions";
import { Card } from "../Card";
import { Button } from "../Button";

export function Terms() {
  return (
    <Container id="terms">
      <SearchOptions />

      <Cards>
        <Card term="Racismo algorítmico" />
        <Card term="Racismo algorítmico" />
        <Card
          term="Racismo algorítmico"
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

      <Button title="Carregar mais" />
    </Container>
  );
}
