import { useState } from "react";

import { Container, Cards } from "./styles";

import { SearchOptions } from "../SearchOptions";
import { Card } from "../Card";
import { Button } from "../Button";

export function Terms() {
  const [visibleCards, setVisibleCards] = useState(10);

  const termsList = [
    {
      term: "Racismo algorítmico",
    },
    {
      term: "Racismo algorítmico",
    },
    {
      term: "Racismo algorítmico",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque in animi fuga impedit ad non pariatur odit, dignissimos dolores facere nisi distinctio mollitia odio quod et maxime fugiat maiores!",
      materialUrl: "https://a.co/d/7emsLO1",
      material:
        "Racismo algorítmico: inteligência artificial e discriminação nas redes digitais",
      authorUrl: "https://www.linkedin.com/in/tarciziosilva/",
      author: "Tarcízio Silva",
    },
    {
      term: "Racismo algorítmico",
    },
    {
      term: "Racismo algorítmico",
    },
    {
      term: "Racismo algorítmico",
    },
    {
      term: "Racismo algorítmico",
    },
    {
      term: "Racismo algorítmico",
    },
    {
      term: "Racismo algorítmico",
    },
    {
      term: "Racismo algorítmico",
    },
    {
      term: "Racismo algorítmico",
    },
    {
      term: "Racismo algorítmico",
    },
  ];

  return (
    <Container id="terms">
      <SearchOptions />

      <Cards>
        {termsList.slice(0, visibleCards).map((item, index) => (
          <Card
            key={index}
            term={item.term}
            description={item.description}
            materialUrl={item.materialUrl}
            material={item.material}
            authorUrl={item.authorUrl}
            author={item.author}
          />
        ))}
      </Cards>

      {visibleCards < termsList.length && (
        <Button
          title="Carregar mais"
          onClick={() => setVisibleCards((prev) => prev + 10)}
        />
      )}
    </Container>
  );
}
