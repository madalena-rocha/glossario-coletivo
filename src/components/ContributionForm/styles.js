import styled from "styled-components";

export const Container = styled.div`
  min-width: 40rem;

  > h2 {
    margin-bottom: 3.8rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 1.9rem;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
  }

  textarea {
    width: 100%;
    padding: 1.45rem 1.9rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY};
    color: ${({ theme }) => theme.COLORS.PURPLE_DARK};

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
      opacity: 0.5;
    }
  }

  button {
    align-self: flex-start;
  }

  @media (max-width: 879px) {
    min-width: auto;

    input,
    textarea {
      width: calc(100vw - 5.6rem);
    }
  }
`;
