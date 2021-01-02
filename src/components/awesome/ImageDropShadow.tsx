import React from "react";
import styled, { css } from "styled-components";

interface ImageDropShadowProps {
  className?: string;
  src: string;
  borderRadius?: number | string;
}
const commonImage = css<ImageDropShadowProps>`
  border-radius: ${(props) => `${props.borderRadius}`};
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  position: relative;
  overflow: visible;
`;

const Shadow = styled.img<ImageDropShadowProps>`
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

const Image = styled.img<ImageDropShadowProps>`
  ${commonImage}
  position: relative;
`;

const ImageDropShadow: React.FC<ImageDropShadowProps> = (props) => {
  const { src, className, borderRadius } = props;
  return (
    <Container className={className}>
      <Shadow src={src} borderRadius={borderRadius} />
      <Image src={src} borderRadius={borderRadius} />
    </Container>
  );
};

ImageDropShadow.defaultProps = {
  borderRadius: 0,
};

export default ImageDropShadow;
