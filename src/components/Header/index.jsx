import { Container, List, Anchor } from "./styles";

export function Header() {
  return (
    <Container id="header">
      <nav>
        <List>
          <li>
            <Anchor href="#home">Home</Anchor>
          </li>
          <li>
            <Anchor href="#terms">Termos</Anchor>
          </li>
          <li>
            <Anchor href="#collaborate">Colabore</Anchor>
          </li>
        </List>
      </nav>
    </Container>
  );
}
