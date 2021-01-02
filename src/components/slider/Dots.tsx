import styled, { css } from "styled-components";

const DotsContainer = styled.div`
  display: flex;
  margin: 2rem 0;
  justify-content: center;
  align-items: center;
`;

type DotProps = {
  active: boolean;
};

const Dot = styled.button<DotProps>`
  margin: 0 0.5rem;
  width: 1rem;
  height: 1rem;

  outline: inherit;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  background-color: var(--gray);
  transition: width 0.2s;

  ${(props) =>
    props.active &&
    css`
      width: 1.4rem;
      height: 1.4rem;
      background-color: var(--orange);
    `}
`;

export { DotsContainer, Dot };
