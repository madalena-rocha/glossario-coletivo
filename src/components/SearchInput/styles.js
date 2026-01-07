import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_DARK};

  input {
    padding-left: 0;
  }

  svg {
    margin-left: 1.9rem;
  }
`;
