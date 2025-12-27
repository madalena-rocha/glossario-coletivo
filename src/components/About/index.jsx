import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiArrowUpCircle,
} from "react-icons/fi";
import { Container, Info, Socials } from "./styles";

import { Form } from "../Form";

export function About() {
  return (
    <Container>
      <div>
        <Info>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            nihil, magni quas dolorum temporibus odio adipisci aliquam
            cupiditate placeat nesciunt porro voluptatibus ea fugiat voluptatem
            quibusdam laboriosam incidunt nam repudiandae!
          </p>

          <Socials>
            <ul>
              <li>
                <a href="#">
                  <FiLinkedin size={"2.4rem"} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiGithub size={"2.4rem"} />
                </a>
              </li>
              <li>
                <a href="#">
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
