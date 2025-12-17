import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const UserInput = styled.input`
  width: 100%;
  padding: 14.5px 19px;

  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  background-color: ${({ theme }) => theme.COLORS.GRAY};

  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    opacity: 0.5;
  }
`;
