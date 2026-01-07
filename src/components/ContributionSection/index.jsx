import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

import { ContributionForm } from "../ContributionForm";

import { Container, Info, Socials } from "./styles";

export function ContributionSection() {
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
                  rel="noopener noreferrer"
                >
                  <FiLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/madalena-rocha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/madalena.machado.rocha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram size={24} />
                </a>
              </li>
            </ul>
          </Socials>
        </Info>

        <ContributionForm />
      </div>
    </Container>
  );
}
