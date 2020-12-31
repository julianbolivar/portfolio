import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

import { Megatitle } from "components/ui/Text";
import { Section } from "types/itemMenu";
import ProjectItem from "./ProjectItem";

const PortfolioSection = styled.section`
  padding: 2rem 0;
  min-height: 100%;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.6rem;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1.4rem;
  font-size: 2.2rem;
  color: var(--orange);
`;

const Portfolio: React.FC<Section> = (props) => {
  const { id } = props;
  return (
    <PortfolioSection id={id}>
      <HeaderSection>
        <Icon icon={faFolderOpen} />
        <Megatitle defaultMargin={false} color="orange">
          Portfolio
        </Megatitle>
      </HeaderSection>
      <ProjectItem
        imagesSources={[
          `${process.env.PUBLIC_URL}/images/portfolio/notiplac_login.png`,
          `${process.env.PUBLIC_URL}/images/portfolio/notiplac_home.png`,
          `${process.env.PUBLIC_URL}/images/portfolio/notiplac_promos.png`,
          `${process.env.PUBLIC_URL}/images/portfolio/notiplac_vehicles.png`,
          `${process.env.PUBLIC_URL}/images/portfolio/notiplac_vehicle-details.png`,
          `${process.env.PUBLIC_URL}/images/portfolio/notiplac_map.png`,
        ]}
        name="Notiplac"
        description="Notiplac is a markerplace where we connect car owners and car shops in one place. The deal was create assitance algorithm to remind car owners their legal and maintenance tasks."
        techItems={[
          "Xcode",
          "Swift",
          "AWS SDK",
          "Google Maps",
          "Analytics",
          "APNS",
        ]}
      />
    </PortfolioSection>
  );
};

export default Portfolio;
