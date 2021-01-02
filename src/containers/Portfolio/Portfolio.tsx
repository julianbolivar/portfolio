import React from "react";
import styled from "styled-components";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import HeaderSection from "components/layouts/HeaderSection";
import { Section } from "types/itemMenu";
import ProjectItem from "./ProjectItem";

import projects from "./projects";

const PortfolioSection = styled.section`
  padding: 2rem 0;
  min-height: 100%;
`;

const ProjectDivider = styled.div`
  margin: 4.2rem 0 5rem 0;
  height: 0.2rem;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Portfolio: React.FC<Section> = (props) => {
  const { id } = props;
  return (
    <PortfolioSection id={id}>
      <HeaderSection icon={faLayerGroup} title="Recent Works" />

      {projects.map((project, index) => {
        const isLastItem = index === projects.length - 1;
        return (
          <div key={index}>
            <ProjectItem {...project} />
            {!isLastItem && <ProjectDivider />}
          </div>
        );
      })}
    </PortfolioSection>
  );
};

export default Portfolio;
