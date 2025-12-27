import { Container, Navigation, Link } from "./styles";

export function Header() {
  return (
    <Container id="header">
      <Navigation>
        <Link href="#home">Home</Link>
        <Link href="#terms">Termos</Link>
        <Link href="#collaborate">Colabore</Link>
      </Navigation>
    </Container>
  );
}
