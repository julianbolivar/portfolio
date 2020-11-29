import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import useMenuInteractions, { menuItems } from "./useMenuInteraction";
import { FloatingButton, IconButton } from "components/ui/Button";
import { Title } from "components/ui/Text";

import styles from "./styles.module.css";

const Main: React.FC = () => {
  const {
    scrollRef,
    goToSectionWithId,
    showNav,
    setShowNav,
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
            const { key, path, name } = item;
            return (
              <li key={key}>
                <Link
                  to={`?section=${path}`}
                  onClick={() => goToSectionWithId(path)}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <footer className={styles.nav__footer}>Footer</footer>
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
              const { key, path, component: Component } = item;

              return <Component key={key} id={path} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
