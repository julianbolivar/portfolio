import React from "react";

import Nav from "containers/Nav";
import MainWrapper from "containers/MainWrapper";
import useMenuInteractions, { menuItems } from "./useMenuInteraction";

import styles from "./styles.module.css";

const Main: React.FC = () => {
  const {
    scrollRef,
    goToSectionWithId,
    showNav,
    setShowNav,
    currentSection,
  } = useMenuInteractions();

  return (
    <div className={styles.wrapper}>
      <Nav
        styles={styles}
        showNav={showNav}
        setShowNav={setShowNav}
        currentSection={currentSection}
        goToSectionWithId={goToSectionWithId}
        menuItems={menuItems}
      />

      <MainWrapper
        styles={styles}
        scrollRef={scrollRef}
        showNav={showNav}
        menuItems={menuItems}
        setShowNav={setShowNav}
      />
    </div>
  );
};

export default Main;
