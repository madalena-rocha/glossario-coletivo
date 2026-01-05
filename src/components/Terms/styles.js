import styled from "styled-components";

export const Container = styled.section`
  margin-inline: 11.6rem;

  > button {
    margin: 0 auto 4.8rem;
  }

  @media (max-width: 425px) {
    margin-inline: 2.8rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4.8rem;

  margin-bottom: 4.8rem;
`;
