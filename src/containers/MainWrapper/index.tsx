import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { FloatingButton } from "components/ui/Button";
import { ItemMenu } from "types/itemMenu";

interface MainProps {
  styles: { [key: string]: string };
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  scrollRef: React.RefObject<HTMLDivElement>;
  menuItems: ItemMenu[];
}

const MainWrapper: FC<MainProps> = (props) => {
  const { styles, showNav, setShowNav, scrollRef, menuItems } = props;

  return (
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
  );
};

export default MainWrapper;
