import React from "react";

import { Section } from "types/itemMenu";
import { Title } from "components/ui/Text";
import styles from "./styles.module.css";

const Profiles: React.FC<Section> = ({ id }) => {
  return (
    <section id={id} className={styles.profiles}>
      <Title>Perfiles</Title>
    </section>
  );
};

export default Profiles;
