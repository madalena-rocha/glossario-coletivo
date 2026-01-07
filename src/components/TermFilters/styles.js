import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 4.8rem;

  margin-bottom: 4.8rem;

  select {
    padding: 1.45rem 1.9rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY};
    color: ${({ theme }) => theme.COLORS.PURPLE_DARK};

    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_DARK};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;
  }
`;
