import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import useMenuInteractions, { menuItems } from "./useMenuInteraction";
import MenuListItem from "components/ui/MenuListItem";
import { FloatingButton, IconButton } from "components/ui/Button";
import { Title, Caption } from "components/ui/Text";

import styles from "./styles.module.css";

const Main: React.FC = () => {
  const {
    scrollRef,
    goToSectionWithId,
    showNav,
    setShowNav,
    currentSection,
  } = useMenuInteractions();

  const classForNav = showNav
    ? `${styles.nav} ${styles["nav--show"]}`
    : styles.nav;

  return (
    <div className={styles.wrapper}>
      <nav className={classForNav}>
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
      <main className={styles.main}>
        <FloatingButton
          className={styles["main__floating-button-menu"]}
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faBars} />
        </FloatingButton>

        <div
          ref={scrollRef}
          className={styles.main__container}
          onClick={() => setShowNav(false)}
        >
          <div className={styles.main__container__content}>
            {menuItems.map((item) => {
              const { key, section, component: Component } = item;

              return <Component key={key} id={section} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
