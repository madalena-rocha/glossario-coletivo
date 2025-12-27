import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { Container, Info, Socials } from "./styles";

import { Form } from "../Form";

export function Collaborate() {
  return (
    <Container id="collaborate">
      <div>
        <Info>
          <p>
            Esta ação é fruto das atividades de mentoria do projeto{" "}
            <a href="https://tramasdigitais.olabi.org.br/" target="_blank">
              "Tramas Digitais - Tecendo Futuros"
            </a>
            , iniciativa do{" "}
            <a href="https://www.olabi.org.br/" target="_blank">
              Olabi
            </a>{" "}
            que busca diversificar o campo dos direitos digitais no Brasil.
          </p>
          <p>
            Para feedbacks ou parcerias, entre em contato pelas minhas redes
            abaixo.
          </p>

          <Socials>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/madalena-machado-rocha/"
                  target="_blank"
                >
                  <FiLinkedin size={"2.4rem"} />
                </a>
              </li>
              <li>
                <a href="https://github.com/madalena-rocha" target="_blank">
                  <FiGithub size={"2.4rem"} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/madalena.machado.rocha/"
                  target="_blank"
                >
                  <FiInstagram size={"2.4rem"} />
                </a>
              </li>
            </ul>
          </Socials>
        </Info>

        <Form />
      </div>
    </Container>
  );
}
