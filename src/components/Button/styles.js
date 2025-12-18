import styled from "styled-components";

export const Container = styled.button`
  border: none;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1.45rem;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
