import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import MenuListItem from "components/ui/MenuListItem";
import { IconButton } from "components/ui/Button";
import { Title, Caption } from "components/ui/Text";
import { ItemMenu } from "types/itemMenu";

interface NavProps {
  styles: { [key: string]: string };
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  menuItems: ItemMenu[];
  currentSection: string | null;
  goToSectionWithId: (id: any) => void;
}

const Nav: FC<NavProps> = (props) => {
  const {
    styles,
    showNav,
    setShowNav,
    menuItems,
    currentSection,
    goToSectionWithId,
  } = props;

  return (
    <nav className={`${styles.nav} ${showNav ? styles["nav--show"] : ""}`}>
      <IconButton
        className={styles["nav__close-menu"]}
        onClick={() => setShowNav(false)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </IconButton>

      <Title className={styles.nav__title}>Hola</Title>

      <ul className={styles.nav__ul}>
        {menuItems.map((item) => {
          const { key, section, name, icon } = item;
          const active = currentSection === section;
          return (
            <li key={key}>
              <MenuListItem
                icon={icon}
                name={name}
                section={section}
                onClick={() => goToSectionWithId(section)}
                active={active ? "true" : "false"}
              />
            </li>
          );
        })}
      </ul>

      <footer className={styles.nav__footer}>
        <Caption>2020 - Julián Bolívar Gutiérrez</Caption>{" "}
      </footer>
    </nav>
  );
};

export default Nav;
