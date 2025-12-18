import { Container } from "./styles";

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={"1.9rem"} />}
      {title}
    </Container>
  );
}
