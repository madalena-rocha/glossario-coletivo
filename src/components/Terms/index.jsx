import { useState, useMemo } from "react";

import { TermFilters } from "../TermFilters";
import { TermCard } from "../TermCard";
import { Button } from "../Button";

import termsList from "../../data/terms.json";

import { Container, Cards } from "./styles";

export function Terms() {
  const [visibleCards, setVisibleCards] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setSearchTerm("");
    }
  };

  const filteredTerms = useMemo(() => {
    return termsList
      .filter((item) =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((item) =>
        !selectedCategory || selectedCategory === "all"
          ? true
          : item.categories?.includes(selectedCategory)
      )
      .sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));
  }, [searchTerm, selectedCategory]);

  return (
    <Container id="terms">
      <TermFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <Cards>
        {filteredTerms.slice(0, visibleCards).map((item, index) => (
          <TermCard
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
