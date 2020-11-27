import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { FloatingButton, IconButton } from "components/ui/Button";
import { Home, About, Profiles } from "containers";

import styles from "./styles.module.css";

const Main: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
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
      </nav>
      <main className={styles.main}>
        <FloatingButton
          className={styles["main__floating-button-menu"]}
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faBars} />
        </FloatingButton>

        <div
          className={styles.main__container}
          onClick={() => setShowNav(false)}
        >
          <Home />
          <About />
          <Profiles />
        </div>
      </main>
    </div>
  );
};

export default Main;
