import { useState } from "react";
import { Container, CardInner, Front, Back, Links } from "./styles";

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
    <Container onClick={() => setIsFlipped(!isFlipped)}>
      <CardInner isFlipped={isFlipped}>
        <Front>
          <h2>{term}</h2>
        </Front>

        <Back>
          <p>{description}</p>

          <Links>
            {material && (
              <li>
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
        </Back>
      </CardInner>
    </Container>
  );
}
