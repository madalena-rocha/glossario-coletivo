import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { Container, Info, Socials } from "./styles";

import { Form } from "../Form";

export function Collaborate() {
  return (
    <Container id="collaborate">
      <div>
        <Info>
          <p>
            Esta ação é fruto das atividades de mentoria do projeto "Tramas
            Digitais - Tecendo Futuros", iniciativa do Olabi que busca
            diversificar o campo dos direitos digitais no Brasil. Qualquer
            feedback ou interesse em parcerias, entre em contato pelas minhas
            redes abaixo.
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
