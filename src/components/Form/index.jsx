import { Container } from "./styles";

import { Input } from "../Input";
import { Button } from "../Button";

export function Form() {
  return (
    <Container>
      <h2>Sugira um termo</h2>

      <form action="#" method="">
        <fieldset>
          <label htmlFor="full_name">Nome</label>
          <Input
            type="text"
            id="full_name"
            name="full_name"
            placeholder="Digite seu nome"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="term">Termo</label>
          <Input
            type="text"
            id="term"
            name="term"
            placeholder="Digite o termo"
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="message">Descrição</label>
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
    </Container>
  );
}
