import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1.45rem;

  border: none;

  background-color: ${({ theme }) => theme.COLORS.VIOLET};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
