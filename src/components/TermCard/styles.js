import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 50rem;

  perspective: 1000px;
  cursor: pointer;

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  transform-style: preserve-3d;
  transition: transform 0.6s;

  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const Front = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3.5rem;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  text-align: center;

  backface-visibility: hidden;
`;

export const Back = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  inset: 0;

  padding: 3.5rem;

  background-color: ${({ theme }) => theme.COLORS.VIOLET};
  color: ${({ theme }) => theme.COLORS.WHITE};

  transform: rotateY(180deg);
  backface-visibility: hidden;

  overflow-y: auto;
`;

export const Actions = styled.div`
  position: absolute;
  top: 1.7rem;
  right: 1.7rem;

  button {
    display: flex;

    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
  }
`;

export const Reference = styled.div`
  margin-top: 2rem;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:hover {
      text-decoration: underline;
    }
  }
`;
