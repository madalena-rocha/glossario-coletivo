import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;

  padding: 4.85rem 11.6rem;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};

  @media (max-width: 703px) {
    justify-content: center;
  }

  @media (max-width: 879px) {
    padding-inline: 2.8rem;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 4.7rem;
`;

export const Anchor = styled.a`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
`;
