import styled from "styled-components";

export const Container = styled.header`
  height: 116px;
  padding-inline: 116px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};

  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 47px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 20px;
  font-weight: bold;
`;
