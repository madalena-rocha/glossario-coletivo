import styled from "styled-components";

export const Container = styled.section`
  margin-inline: 11.6rem;
  text-align: center;

  @media (max-width: 879px) {
    margin-inline: 2.8rem;
  }
`;

export const Title = styled.h1`
  margin: 4.8rem auto;
`;

export const Description = styled.p`
  margin-inline: auto;
  margin-bottom: 9rem;

  @media (max-width: 879px) {
    margin-bottom: 4.8rem;
  }
`;
