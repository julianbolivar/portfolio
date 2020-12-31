import styled, { css } from "styled-components";

type TextProps = {
  color?: "orange" | "blue" | "gray" | "white";
  defaultMargin?: boolean;
};

function selectColor({ color }: TextProps) {
  switch (color) {
    case "orange":
      return "var(--orange)";
    case "blue":
      return "var(--blue)";
    case "gray":
      return "var(--gray)";
    case "white":
      return "var(--white)";
    default:
      return "var(--dark-gray)";
  }
}

const commonText = css<TextProps>`
  color: ${(props) => selectColor(props)};
`;
// margin-bottom: 2.8rem;
const Megatitle = styled.h1<TextProps>`
  margin-bottom: ${(props) => (props.defaultMargin ? "2.8rem" : "0")};
  font-family: "Lato", sans-serif;
  font-size: 3.2rem;
  ${commonText}
`;

Megatitle.defaultProps = {
  color: "orange",
  defaultMargin: true,
};

const Title = styled.h2<TextProps>`
  margin-bottom: 2.4rem;
  font-family: "Lato", sans-serif;
  font-size: 2.6rem;
  ${commonText}
`;

const Subtitle = styled.h3<TextProps>`
  margin-bottom: 2rem;
  font-family: "Lato", sans-serif;
  font-size: 2.1rem;
  color: var(--orange);
  ${commonText}
`;

const Paragraph = styled.p<TextProps>`
  font-family: "Nunito", sans-serif;
  font-size: 1.8rem;
  ${commonText}
`;

const Caption = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 1.4rem;
  color: var(--gray);
`;

export { Megatitle, Title, Subtitle, Paragraph, Caption };
