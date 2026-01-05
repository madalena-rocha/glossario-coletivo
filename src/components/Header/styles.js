import styled from "styled-components";

export const Container = styled.header`
  padding: 4.85rem 11.6rem;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};

  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    padding-inline: 2.8rem;

    justify-content: center;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 4.7rem;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-weight: bold;
`;
