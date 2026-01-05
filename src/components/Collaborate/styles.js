import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    gap: 4.8rem;
    justify-content: space-around;

    padding: 4.8rem 0;
    margin-inline: 11.6rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 425px) {
      margin-inline: 2.8rem;
    }
  }
`;

export const Info = styled.div`
  max-width: 69.3rem;

  > p:nth-child(1) {
    margin-bottom: 1.6rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bold;
  }
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
