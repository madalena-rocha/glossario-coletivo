import { Container, Title, Description } from "./styles";

export function Home() {
  return (
    <Container id="home">
      <Title>Glossário Coletivo</Title>

      <Description>
        O Glossário Coletivo é uma iniciativa que se propõe a reunir, explicar e
        democratizar o acesso a termos relacionados às tecnologias, direitos e
        desigualdades no meio digital. Se no mundo físico as desigualdades no
        acesso a direitos já foram amplamente discutidas, hoje observamos a
        transposição dessas assimetrias para o ambiente digital, acompanhada do
        surgimento constante de novos conceitos e nomenclaturas. Diante desse
        cenário, o projeto busca facilitar o entendimento desse campo,
        apresentando definições acessíveis e contextualizadas sobre termos que
        emergem no universo digital. Com caráter colaborativo e em permanente
        construção, o glossário conta com uma seção dedicada à sugestão de novos
        termos, que serão analisados, validados e, quando pertinentes,
        incorporados ao site, fortalecendo um espaço coletivo de aprendizagem e
        reflexão.
      </Description>
    </Container>
  );
}
