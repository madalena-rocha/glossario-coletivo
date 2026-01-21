import { Container } from "./styles";

export function Button({ icon: Icon, title, type = "button", ...rest }) {
  return (
    <Container type={type} {...rest}>
      {Icon && <Icon size={19} />}
      {title}
    </Container>
  );
}
