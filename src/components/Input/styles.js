import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

export const UserInput = styled.input`
  width: 100%;
  padding: 1.45rem 1.9rem;

  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  background-color: ${({ theme }) => theme.COLORS.GRAY};

  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    opacity: 0.5;
  }
`;
