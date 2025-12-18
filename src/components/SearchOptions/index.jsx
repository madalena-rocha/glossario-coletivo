import { FiSliders } from "react-icons/fi";
import { Container } from "./styles";

import { SearchBar } from "../SearchBar";
import { Button } from "../Button";

export function SearchOptions() {
  return (
    <Container>
      <SearchBar />
      <Button icon={FiSliders} title="Filtrar" />
    </Container>
  );
}
