import React from "react";
import styled from "styled-components";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type IsCurrentSection = {
  active: "true" | "false";
};

const ItemListContainer = styled.div`
  position: relative;
  height: 5rem;

  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    & * {
      color: var(--dark-gray);
    }
  }
`;

const IconContainer = styled.div`
  margin-right: 1rem;
  width: 3rem;
  text-align: center;
`;

const Icon = styled(FontAwesomeIcon)<FontAwesomeIconProps & IsCurrentSection>`
  font-size: 2rem;
  color: ${(props) =>
    props.active === "true" ? "var(--orange)" : "var(--gray)"};
`;

const ItemTitle = styled.p<IsCurrentSection>`
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${(props) =>
    props.active === "true" ? "var(--orange)" : "var(--gray)"};
`;

interface MenuListItemProps extends IsCurrentSection {
  icon?: IconDefinition;
  name: string;
  section: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const MenuListItem: React.FC<MenuListItemProps> = (props) => {
  const { name, onClick, icon, active } = props;
  return (
    <ItemListContainer onClick={onClick}>
      {icon && (
        <IconContainer>
          <Icon icon={icon} active={active!} />
        </IconContainer>
      )}
      <ItemTitle active={active!}>{name}</ItemTitle>
    </ItemListContainer>
  );
};

MenuListItem.defaultProps = {
  active: "false",
};

export default MenuListItem;
