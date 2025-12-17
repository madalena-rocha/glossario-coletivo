import { Container, Navigation, Link } from "./styles";

export function Header() {
  return (
    <Container>
      <Navigation>
        <Link href="">Home</Link>
        <Link href="">Sobre</Link>
        <Link href="">Termos</Link>
        <Link href="">Sugira um termo</Link>
      </Navigation>
    </Container>
  );
}
