import React from "react";
import styled from "styled-components";

import { Megatitle, Title } from "components/ui/Text";
import { Section } from "types/itemMenu";
import ProjectItem from "./ProjectItem";

const PortfolioSection = styled.section`
  padding: 2rem 0;
  min-height: 100%;
`;

const HeaderSection = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Portfolio: React.FC<Section> = (props) => {
  const { id } = props;
  return (
    <PortfolioSection id={id}>
      <HeaderSection>
        <Megatitle>Portfolio</Megatitle>
      </HeaderSection>
      <ProjectItem
        imagesSources={[
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
          "https://cdn-cms.bnea.io/sites/default/files/games/boxart/193439976164500.jpg",
        ]}
        name="Notiplac"
        description="Notiplac es un producto creado para la industria Automotriz, su principal objetivo es poder darle el poder a los conductores para gestionar sus trámites legales y mecánicos de sus vehículos"
      />
    </PortfolioSection>
  );
};

export default Portfolio;
