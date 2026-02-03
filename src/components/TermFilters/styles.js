import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 4.8rem;

  margin-bottom: 4.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;
  }
`;
