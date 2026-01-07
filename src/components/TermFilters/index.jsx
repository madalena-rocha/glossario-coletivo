import { SearchInput } from "../SearchInput";

import { categories } from "../../data/categories";

import { Container } from "./styles";

export function TermFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <Container>
      <SearchInput value={searchTerm} onChange={onSearchChange} />

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
