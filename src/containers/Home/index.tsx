import React from "react";

import { Section } from "types/itemMenu";
import { Title } from "components/ui/Text";
import styles from "./styles.module.css";

const Home: React.FC<Section> = ({ id }) => {
  return (
    <section id={id} className={styles.home}>
      <Title>Home</Title>
    </section>
  );
};

export default Home;
