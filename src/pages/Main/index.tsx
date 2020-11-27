import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { FloatingButton, IconButton } from "components/ui/Button";
import { Home, About, Profiles } from "containers";
import styles from "./styles.module.css";

const Main: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <IconButton className={styles["nav__close-menu"]}>
          <FontAwesomeIcon icon={faTimes} />
        </IconButton>
      </nav>
      <main className={styles.main}>
        <FloatingButton className={styles["main__floating-button-menu"]}>
          <FontAwesomeIcon icon={faBars} />
        </FloatingButton>

        <div className={styles.main__container}>
          <Home />
          <About />
          <Profiles />
        </div>
      </main>
    </div>
  );
};

export default Main;
