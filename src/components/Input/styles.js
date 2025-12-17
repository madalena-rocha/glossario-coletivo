import styled from "styled-components";

export const Container = styled.div``;

export const UserInput = styled.input`
  width: 100%;
  padding: 14.5px 19px;

  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  background-color: ${({ theme }) => theme.COLORS.GRAY};

  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_DARK};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    opacity: 0.5;
  }
`;
