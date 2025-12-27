import styled from "styled-components";

export const Container = styled.div`
  > h2 {
    margin-bottom: 3.8rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 1.9rem;

    > fieldset {
      border: none;
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
  }
`;
