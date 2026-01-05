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

    > fieldset {
      border: none;

      display: flex;
      flex-direction: column;
    }

    textarea {
      width: 100%;
      padding: 1.45rem 1.9rem;

      color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
      background-color: ${({ theme }) => theme.COLORS.GRAY};

      border: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
        opacity: 0.5;
      }
    }

    > button {
      align-self: flex-start;
    }

    @media (max-width: 768px) {
      input,
      textarea {
        width: calc(100vw - 23.2rem);
      }
    }

    @media (max-width: 425px) {
      input,
      textarea {
        width: calc(100vw - 5.6rem);
      }
    }
  }

  @media (max-width: 768px) {
    min-width: auto;
  }
`;
