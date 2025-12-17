import { Container, UserInput } from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={"19px"} />}
      <UserInput {...rest} />
    </Container>
  );
}
