import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    justify-content: space-around;

    padding: 4.8rem 0;
    margin-inline: 11.6rem;
  }
`;

export const Info = styled.div`
  max-width: 69.3rem;
`;

export const Socials = styled.div`
  margin-top: 5.1rem;

  > ul {
    display: flex;
    gap: 1.2rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Form = styled.div`
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
