import { useState } from "react";

import { Container, CardInner, Front, Back, List } from "./styles";

export function TermCard({
  term,
  description,
  materialUrl,
  material,
  authorUrl,
  author,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <Container onClick={handleFlip}>
      <CardInner isFlipped={isFlipped}>
        <Front>
          <h2>{term}</h2>
        </Front>

        <Back>
          <p>{description}</p>

          <List>
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
          </List>
        </Back>
      </CardInner>
    </Container>
  );
}
