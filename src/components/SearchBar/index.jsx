import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

import { Input } from "../Input";

export function SearchBar({ value, onChange }) {
  return (
    <Container>
      <Input
        icon={FiSearch}
        placeholder="Pesquisar termo"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
}
