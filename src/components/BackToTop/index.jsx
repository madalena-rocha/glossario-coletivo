import { FiArrowUpCircle } from "react-icons/fi";
import { Link } from "./styles";

export function BackToTop() {
  return (
    <Link href="#header">
      <FiArrowUpCircle size={"4.8rem"} />
    </Link>
  );
}
