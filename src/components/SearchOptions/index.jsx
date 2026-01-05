import { Container } from "./styles";

import { SearchBar } from "../SearchBar";

import { categories } from "../../data/categories";

export function SearchOptions({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <Container>
      <SearchBar value={searchTerm} onChange={onSearchChange} />

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">Todos os temas</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </Container>
  );
}
