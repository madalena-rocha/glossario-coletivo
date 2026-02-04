import { Input } from "../Input";
import { Button } from "../Button";

import { Container } from "./styles";

export function ContributionForm() {
  return (
    <Container>
      <h2>Sugira um termo</h2>

      <form name="term-suggestion-v2" method="POST" action="/success.html">
        <input type="hidden" name="form-name" value="term-suggestion-v2" />

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
            placeholder="Descreva o termo"
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="reference">Referência</label>
          <Input
            type="text"
            id="reference"
            name="reference"
            placeholder="Sugira um conteúdo"
          />
        </fieldset>

        <Button type="submit" title="Enviar" />
      </form>
    </Container>
  );
}
