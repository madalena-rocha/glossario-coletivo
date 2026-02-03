import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 18.484rem;

  button {
    width: 100%;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 0.725rem);
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_DARK};

  z-index: 10;
`;

export const Option = styled.li`
  padding: 0.725rem 1.45rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
