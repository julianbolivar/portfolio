import { useCallback, useRef, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import zenscroll from "zenscroll";

import { ItemMenu } from "types/itemMenu";

import Home from "containers/Home";
import About from "containers/About";
import Profiles from "containers/Profiles";

export const menuItems: ItemMenu[] = [
  {
    key: 0,
    path: "home",
    name: "Inicio",
    component: Home,
  },
  {
    key: 1,
    path: "about",
    name: "Acerca de mi",
    component: About,
  },
  {
    key: 2,
    path: "profiles",
    name: "Perfiles",
    component: Profiles,
  },
];

function useMenuInteraction() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const search = useLocation().search;
  const [showNav, setShowNav] = useState(false);

  const goToSectionWithId = useCallback((id) => {
    const targetElement = document.getElementById(id);
    const myScroller = zenscroll.createScroller(scrollRef.current!, 500, 0);
    myScroller.to(targetElement!);
    setShowNav(false);
  }, []);

  const onScroll = useCallback(
    () => {
      const scrollTop = scrollRef.current?.scrollTop || 0;
      const scrollHeight = scrollRef.current?.offsetHeight || 0;
      const scrollCenter = scrollTop + scrollHeight / 2;

      const focusSection = menuItems.find(({ path }) => {
        const focusElement = document.getElementById(path);
        if (!focusElement) return false;

        const topFocusEle = focusElement!.offsetTop;
        const bottomFocusEle = topFocusEle + focusElement!.offsetHeight;

        return scrollCenter >= topFocusEle && scrollCenter < bottomFocusEle;
      });

      const { path } = focusSection || {};
      if (path) history.replace(`?section=${path}`);
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      const params = new URLSearchParams(search);
      let section = params.get("section");
      if (!section) {
        const firstSection = menuItems[0].path;
        history.replace(`?section=${firstSection}`);
        section = firstSection;
      }
      goToSectionWithId(section);

      const scrollElement = scrollRef.current!;
      scrollElement.addEventListener("scroll", onScroll);

      return () => {
        scrollElement.removeEventListener("scroll", onScroll);
      };
    },
    // eslint-disable-next-line
    []
  );

  return { scrollRef, goToSectionWithId, showNav, setShowNav };
}

export default useMenuInteraction;
