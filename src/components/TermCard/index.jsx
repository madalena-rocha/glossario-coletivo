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

export function TermCard({ term, description, materials = [] }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  async function handleCopy(e) {
    e.stopPropagation();

    const materialsText = materials.length
      ? `Leia mais em:\n${materials.map((item) => `${item.url}`).join("\n")}`
      : "";

    const textToCopy = `${term}\n\n${description}\n\n${materialsText}`;

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

          {materials.length > 0 && (
            <Reference>
              <p>Leia mais em:</p>
              <ul>
                {materials.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reference>
          )}
        </Back>
      </CardInner>
    </Container>
  );
}
