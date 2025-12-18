import { Container, Links } from "./styles";

export function Card({
  isFlipped,
  term,
  description,
  materialUrl,
  material,
  authorUrl,
  author,
}) {
  return (
    <Container isFlipped={isFlipped}>
      {!isFlipped ? (
        <h2>{term}</h2>
      ) : (
        <div>
          <p>{description}</p>

          <Links>
            <li>
              Recomendação:{" "}
              <a href={materialUrl} target="_blank" rel="noopener noreferrer">
                {material}
              </a>
            </li>
            <li>
              Autoria:{" "}
              <a href={authorUrl} target="_blank" rel="noopener noreferrer">
                {author}
              </a>
            </li>
          </Links>
        </div>
      )}
    </Container>
  );
}
