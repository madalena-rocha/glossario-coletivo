import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiArrowUpCircle,
} from "react-icons/fi";
import { Container, Info, Socials, Form } from "./styles";

import { Input } from "../Input";
import { Button } from "../Button";

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

        <Form>
          <h2>Sugira um termo</h2>

          <form action="#" method="">
            <fieldset>
              <label for="full_name">Nome</label>
              <Input
                type="text"
                id="full_name"
                name="full_name"
                placeholder="Digite seu nome"
              />
            </fieldset>

            <fieldset>
              <label for="term">Termo</label>
              <Input
                type="text"
                id="term"
                name="term"
                placeholder="Digite o termo"
                required
              />
            </fieldset>

            <fieldset>
              <label for="message">Descrição</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="Descreva o termo"
                required
              ></textarea>
            </fieldset>

            <Button type="submit" title="Enviar" />
          </form>
        </Form>
      </div>
    </Container>
  );
}
