import styled, { css } from "styled-components";

const baseButton = css`
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--dark-gray);

  background-color: var(--white);
  box-shadow: 2px 2px 3px var(--gray);
  border-radius: 50%;
  border: none;
  outline: none;

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 1;
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
      inset 8px 8px 16px rgba(0, 0, 0, 0.1);
  }

  &:first-child {
    font-size: 2.2rem;
  }
`;

const FloatingButton = styled.button`
  width: 48px;
  height: 48px;
  ${baseButton}
`;

const IconButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  outline: none;

  font-size: 2.1rem;
  font-weight: 600;
  color: var(--dark-gray);

  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 1;
  }
`;

export { FloatingButton, IconButton };
