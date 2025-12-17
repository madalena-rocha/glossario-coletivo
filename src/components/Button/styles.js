import styled from "styled-components";

export const Container = styled.button`
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 14.5px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
