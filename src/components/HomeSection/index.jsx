import { Container, Title, Description } from "./styles";

export function HomeSection() {
  return (
    <Container id="home">
      <Title>Glossário Coletivo</Title>

      <Description>
        O Glossário Coletivo é um projeto colaborativo que explica termos
        ligados às tecnologias, aos direitos e às desigualdades no ambiente
        digital. Diante da expansão dessas desigualdades para o meio digital e
        do surgimento constante de novos conceitos, o glossário busca facilitar
        o entendimento desse campo por meio de definições acessíveis e
        contextualizadas. O projeto está em permanente construção e permite a
        sugestão de novos termos, fortalecendo um espaço coletivo de
        aprendizagem e reflexão.
      </Description>
    </Container>
  );
}
