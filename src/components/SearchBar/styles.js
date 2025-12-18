import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_DARK};

  flex: 1;

  input {
    padding-left: 0;
  }

  svg {
    margin-left: 19px;
  }
`;
