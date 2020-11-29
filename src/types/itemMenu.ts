import { FC } from "react";

export type Section = {
  id: string;
};

export type ItemMenu = {
  key: number;
  path: string;
  name: string;
  component: FC<Section>;
};
