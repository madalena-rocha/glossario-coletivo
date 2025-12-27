import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  position: fixed;
  bottom: 14rem;
  right: 6.8rem;
  z-index: 10;

  color: ${({ theme }) => theme.COLORS.VIOLET};
`;
