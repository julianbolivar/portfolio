import React from "react";
import styled, { css } from "styled-components";

interface ImageDropShadowProps {
  className?: string;
  src: string;
  applyBorderRadius?: boolean;
}
const commonImage = css<ImageDropShadowProps>`
  border-radius: ${(props) => (props.applyBorderRadius ? "1.8rem" : "none")};
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  position: relative;
  overflow: visible;
`;

const Shadow = styled.img`
  ${commonImage}
  position: absolute;
  left: 50%;
  top: 2.2rem;
  width: 80%;
  height: 92%;

  transform: translateX(-50%);
  filter: blur(2.2rem);
  opacity: 0.6;
`;

const Image = styled.img`
  ${commonImage}
  position: relative;
`;

const ImageDropShadow: React.FC<ImageDropShadowProps> = (props) => {
  const { src, className } = props;
  return (
    <Container className={className}>
      <Shadow src={src} />
      <Image src={src} />
    </Container>
  );
};

ImageDropShadow.defaultProps = {
  applyBorderRadius: false,
};

export default ImageDropShadow;
