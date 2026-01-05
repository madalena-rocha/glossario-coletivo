import { useState } from "react";

import { Container, Links } from "./styles";

export function Card({
  term,
  description,
  materialUrl,
  material,
  authorUrl,
  author,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Container isFlipped={isFlipped} onClick={() => setIsFlipped(!isFlipped)}>
      {!isFlipped ? (
        <h2>{term}</h2>
      ) : (
        <div>
          <p>{description}</p>

          <Links>
            {material && (
              <li>
                Recomendação:{" "}
                <a
                  href={materialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {material}
                </a>
              </li>
            )}
            {author && (
              <li>
                Autoria:{" "}
                <a
                  href={authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {author}
                </a>
              </li>
            )}
          </Links>
        </div>
      )}
    </Container>
  );
}
