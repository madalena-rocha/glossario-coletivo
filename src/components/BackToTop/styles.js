import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  position: fixed;
  bottom: 14rem;
  right: 5.8rem;
  z-index: 10;

  color: ${({ theme }) => theme.COLORS.WHITE};

  @media (max-width: 425px) {
    right: 2.8rem;
  }
`;
