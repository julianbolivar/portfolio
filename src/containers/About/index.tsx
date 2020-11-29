import React from "react";

import { Section } from "types/itemMenu";
import { Title } from "components/ui/Text";
import styles from "./styles.module.css";

const About: React.FC<Section> = ({ id }) => {
  return (
    <section id={id} className={styles.about}>
      <Title>Acerca de mi</Title>
    </section>
  );
};

export default About;
