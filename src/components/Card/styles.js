import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 50rem;

  perspective: 1000px;
  cursor: pointer;
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

export const Front = styled.button`
  width: 100%;
  height: 100%;

  position: absolute;
  inset: 0;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  padding: 3.5rem;
  text-align: left;

  backface-visibility: hidden;

  text-align: center;
`;

export const Back = styled.button`
  width: 100%;
  height: 100%;

  position: absolute;
  inset: 0;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  padding: 3.5rem;
  text-align: left;

  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:hover {
      text-decoration: underline;
    }
  }
`;
