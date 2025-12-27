import styled from "styled-components";

export const Container = styled.section`
  margin-inline: 11.6rem;
`;

export const Title = styled.h1`
  margin: 4.8rem auto;
  text-align: center;
`;

export const Description = styled.p`
  margin-inline: auto;
  margin-bottom: 9rem;

  text-align: justify;

  a {
    color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    font-weight: bold;
  }
`;
