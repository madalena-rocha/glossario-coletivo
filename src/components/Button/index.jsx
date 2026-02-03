import { Container, Title } from "./styles";

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest} title={title}>
      {Icon && <Icon size={19} />}
      <Title>{title}</Title>
    </Container>
  );
}
