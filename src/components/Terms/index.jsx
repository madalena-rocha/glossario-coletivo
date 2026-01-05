import { useState } from "react";

import { Container, Cards } from "./styles";

import { SearchOptions } from "../SearchOptions";
import { Card } from "../Card";
import { Button } from "../Button";

import termsList from "../../data/terms.json";

export function Terms() {
  const [visibleCards, setVisibleCards] = useState(10);

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
