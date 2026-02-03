import { useState } from "react";
import ReactMarkdown from "react-markdown";

import { Container, CardInner, Front, Back, Reference } from "./styles";

export function TermCard({ term, description, materialUrl, material }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <Container onClick={handleFlip}>
      <CardInner isFlipped={isFlipped}>
        <Front>
          <h2>{term}</h2>
        </Front>

        <Back>
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
