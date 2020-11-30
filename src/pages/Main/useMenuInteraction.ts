import { useCallback, useRef, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  faHome,
  faUserCheck,
  faBriefcase,
  faGraduationCap,
  faUserTie,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import zenscroll from "zenscroll";

import { ItemMenu } from "types/itemMenu";

import Home from "containers/Home";
import About from "containers/About";
import Profiles from "containers/Profiles";

export const menuItems: ItemMenu[] = [
  {
    key: 0,
    section: "home",
    name: "Inicio",
    component: Home,
    icon: faHome,
  },
  {
    key: 1,
    section: "about",
    name: "Acerca de mi",
    component: About,
    icon: faUserCheck,
  },
  {
    key: 2,
    section: "services",
    name: "Servicios",
    component: Profiles,
    icon: faBriefcase,
  },
  {
    key: 3,
    section: "experience",
    name: "Experiencia",
    component: About,
    icon: faGraduationCap,
  },
  {
    key: 4,
    section: "workers",
    name: "Trabajos",
    component: Home,
    icon: faUserTie,
  },
  {
    key: 5,
    section: "contact",
    name: "Contacto",
    component: About,
    icon: faComments,
  },
];

function useMenuInteraction() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const search = useLocation().search;
  const [showNav, setShowNav] = useState(false);

  const params = new URLSearchParams(search);
  const currentSection = params.get("section");

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

      const focusSection = menuItems.find(({ section }) => {
        const focusElement = document.getElementById(section);
        if (!focusElement) return false;

        const topFocusEle = focusElement!.offsetTop;
        const bottomFocusEle = topFocusEle + focusElement!.offsetHeight;

        return scrollCenter >= topFocusEle && scrollCenter < bottomFocusEle;
      });

      const { section } = focusSection || {};
      if (section) history.replace(`?section=${section}`);
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      const allSections = menuItems.map(({ section }) => section);
      // const params = new URLSearchParams(search);
      let section = currentSection;

      if (!section || !allSections.includes(section)) {
        section = menuItems[0].section;
        history.replace(`?section=${section}`);
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

  return { scrollRef, goToSectionWithId, showNav, setShowNav, currentSection };
}

export default useMenuInteraction;
