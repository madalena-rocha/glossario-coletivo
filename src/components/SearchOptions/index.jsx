import { FiSliders } from "react-icons/fi";
import { Container } from "./styles";

import { SearchBar } from "../SearchBar";
import { Button } from "../Button";

export function SearchOptions({ searchTerm, onSearchChange }) {
  return (
    <Container>
      <SearchBar value={searchTerm} onChange={onSearchChange} />
      <Button icon={FiSliders} title="Filtrar" />
    </Container>
  );
}
