import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

import { Input } from "../Input";

export function Search() {
  return (
    <Container>
      <Input icon={FiSearch} placeholder="Pesquisar termo" />
    </Container>
  );
}
