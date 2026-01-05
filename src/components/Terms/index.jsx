import { useState } from "react";

import { Container, Cards } from "./styles";

import { SearchOptions } from "../SearchOptions";
import { Card } from "../Card";
import { Button } from "../Button";

import termsList from "../../data/terms.json";

export function Terms() {
  const [visibleCards, setVisibleCards] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = termsList.filter((item) =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container id="terms">
      <SearchOptions searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <Cards>
        {filteredTerms.slice(0, visibleCards).map((item, index) => (
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

      {visibleCards < filteredTerms.length && (
        <Button
          title="Carregar mais"
          onClick={() => setVisibleCards((prev) => prev + 10)}
        />
      )}
    </Container>
  );
}
