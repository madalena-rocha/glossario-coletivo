import styled from "styled-components";

export const Anchor = styled.a`
  position: fixed;
  bottom: 14rem;
  right: 5.8rem;
  z-index: 10;

  display: flex;
  color: ${({ theme }) => theme.COLORS.WHITE};

  @media (max-width: 425px) {
    right: 2.8rem;
  }
`;
