import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <p>&copy; {new Date().getFullYear()} Madalena Rocha</p>
      <p>Todos os direitos reservados.</p>
    </Container>
  );
}
