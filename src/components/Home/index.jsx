import { Container, Title, Description } from "./styles";

export function Home() {
  return (
    <Container id="home">
      <Title>Glossário Coletivo</Title>

      <Description>
        O Glossário Coletivo é um projeto desenvolvido no âmbito do{" "}
        <a href="https://tramasdigitais.olabi.org.br/" target="_blank">
          Tramas Digitais
        </a>
        , em parceria com o{" "}
        <a href="https://www.olabi.org.br/" target="_blank">
          Olabi
        </a>
        , que se propõe a reunir, explicar e democratizar o acesso a termos
        relacionados às tecnologias, direitos e desigualdades no meio digital.
        Se no mundo físico as desigualdades no acesso a direitos já foram
        amplamente discutidas, hoje vemos a transposição dessas assimetrias para
        o ambiente digital, acompanhada do surgimento constante de novos
        conceitos e nomenclaturas. Diante disso, o projeto busca facilitar o
        entendimento desse campo, apresentando definições acessíveis e
        contextualizadas sobre termos que emergem no universo digital. A
        proposta é colaborativa: o glossário está em constante construção e
        conta com uma seção para sugestão de novos termos, que serão analisados,
        validados e, se pertinentes, incorporados ao site, fortalecendo um
        espaço coletivo de aprendizagem e reflexão.
      </Description>
    </Container>
  );
}
