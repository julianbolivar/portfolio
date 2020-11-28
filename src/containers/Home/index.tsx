import React from "react";

import { Title } from "components/ui/Text";
import styles from "./styles.module.css";

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <Title>Home</Title>
    </section>
  );
};

export default Home;
