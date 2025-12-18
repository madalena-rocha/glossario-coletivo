import styled from "styled-components";

export const Container = styled.button`
  width: 30rem;
  height: 50rem;

  text-align: left;

  background-color: ${({ theme, isFlipped }) =>
    isFlipped ? theme.COLORS.PURPLE_LIGHT : theme.COLORS.PURPLE_DARK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  padding: 3.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:hover {
      text-decoration: underline;
    }
  }
`;
