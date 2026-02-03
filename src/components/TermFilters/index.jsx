import { SearchInput } from "../SearchInput";
import { CategorySelect } from "../CategorySelect";

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

      <CategorySelect
        value={selectedCategory}
        onChange={onCategoryChange}
        options={categories}
      />
    </Container>
  );
}
