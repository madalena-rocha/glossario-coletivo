import { FiSearch } from "react-icons/fi";

import { Input } from "../Input";

import { Container } from "./styles";

export function SearchInput({ value, onChange }) {
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
