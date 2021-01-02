import React, { FC, MouseEvent } from "react";
import styled, { css } from "styled-components";

interface ArrowSliderProps {
  disabled: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
}

const wrapperBase = css<ArrowSliderProps>`
  display: ${(props) => (props.disabled ? "none" : "block")};
  position: absolute;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 1rem;
  top: 50%;
  transform: translateY(-50%);

  background-color: var(--dark-background-blur);
  backdrop-filter: blur(10px);
  cursor: pointer;
`;

const ArrowLeftWrapper = styled.div<ArrowSliderProps>`
  ${wrapperBase}
  left: 0.8rem;
`;

const ArrowRightWrapper = styled.div<ArrowSliderProps>`
  ${wrapperBase}
  right: 0.8rem;
`;

const baseArrow = css`
  fill: var(--white);
  width: 2.6rem;
  height: 2.6rem;
  margin-top: 0.55rem;
`;

const ArrowLeftSVG = styled.svg`
  ${baseArrow}
  margin-left: 0.4rem;
`;

const ArrowRightSVG = styled.svg`
  ${baseArrow}
  margin-left: 0.7rem;
`;

const ArrowLeft: FC<ArrowSliderProps> = (props) => {
  const { disabled, onClick } = props;
  return (
    <ArrowLeftWrapper disabled={disabled} onClick={onClick}>
      <ArrowLeftSVG viewBox="0 0 24 24">
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </ArrowLeftSVG>
    </ArrowLeftWrapper>
    // <ArrowLeftBase
    //   disabled={disabled}
    //   onClick={onClick}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    // >
    //
    // </ArrowLeftBase>
  );
};

const ArrowRight: FC<ArrowSliderProps> = (props) => {
  const { disabled, onClick } = props;
  return (
    <ArrowRightWrapper disabled={disabled} onClick={onClick}>
      <ArrowRightSVG viewBox="0 0 24 24">
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </ArrowRightSVG>
    </ArrowRightWrapper>
    // <ArrowRightBase
    //   disabled={disabled}
    //   onClick={onClick}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    // >
    //   <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    // </ArrowRightBase>
  );
};

export { ArrowLeft, ArrowRight };
