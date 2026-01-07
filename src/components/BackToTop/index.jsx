import { FiArrowUpCircle } from "react-icons/fi";

import { Anchor } from "./styles";

export function BackToTop() {
  return (
    <Anchor href="#header" aria-label="Voltar ao topo">
      <FiArrowUpCircle size={48} />
    </Anchor>
  );
}
