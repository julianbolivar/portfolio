import { FC } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type Section = {
  id: string;
};

export type ItemMenu = {
  key: number;
  section: string;
  name: string;
  component: FC<Section>;
  icon?: IconDefinition;
};
