import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { Megatitle } from "components/ui/Text";

interface HeaderSectionProps {
  icon: IconDefinition;
  title: string;
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.6rem;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1.4rem;
  font-size: 2.2rem;
  color: var(--orange);
`;

const HeaderSection: FC<HeaderSectionProps> = (props) => {
  const { icon, title } = props;

  return (
    <HeaderWrapper>
      <Icon icon={icon} />
      <Megatitle defaultMargin={false} color="orange">
        {title}
      </Megatitle>
    </HeaderWrapper>
  );
};

export default HeaderSection;
