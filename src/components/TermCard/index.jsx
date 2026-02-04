import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { FiCopy, FiCheck } from "react-icons/fi";

import {
  Container,
  CardInner,
  Front,
  Back,
  Reference,
  Actions,
} from "./styles";

export function TermCard({ term, description, materialUrl, material }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  async function handleCopy(e) {
    e.stopPropagation();

    const textToCopy = `${term}\n\n${description}\n\n${materialUrl}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <Container onClick={handleFlip}>
      <CardInner isFlipped={isFlipped}>
        <Front>
          <h2>{term}</h2>
        </Front>

        <Back>
          <Actions>
            <button
              type="button"
              title={copied ? "Copiado" : "Copiar"}
              onClick={handleCopy}
            >
              {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
            </button>
          </Actions>

          <ReactMarkdown>{description}</ReactMarkdown>

          {material && (
            <Reference>
              <a
                href={materialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {material}
              </a>
            </Reference>
          )}
        </Back>
      </CardInner>
    </Container>
  );
}
