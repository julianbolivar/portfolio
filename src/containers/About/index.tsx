import React from "react";
import styled from "styled-components";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

import HeaderSection from "components/layouts/HeaderSection";
import ImageDropShadow from "components/awesome/ImageDropShadow";
import Card from "components/ui/Card";
import { RaisedButton } from "components/ui/Button";
import { Section } from "types/itemMenu";
import { Title, Subtitle, Paragraph } from "components/ui/Text";

const AboutSection = styled.section`
  padding: 4rem 0;
  min-height: 100%;

  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  padding: 4rem 0;
  flex: 1;
  display: grid;
  grid-template-columns: 22rem auto;
  grid-column-gap: 4.8rem;
  grid-row-gap: 4rem;
  align-items: center;
`;

const PicDev = styled(ImageDropShadow)`
  width: 22rem;
  height: 22rem;
`;

const AboutMeDescription = styled(Card)`
  display: flex;
  padding: 3.8rem;
  flex-direction: column;
  align-items: flex-start;

  & > p {
    margin-bottom: 2rem;
  }
`;

const SkillsWrapper = styled.div``;

const About: React.FC<Section> = ({ id }) => {
  return (
    <AboutSection id={id}>
      <HeaderSection icon={faUserCheck} title="About Me" />

      <ContentWrapper>
        <PicDev
          src="https://pbs.twimg.com/profile_images/908869888172630016/aPWA3gVa_400x400.jpg"
          borderRadius="50%"
        />
        <AboutMeDescription>
          <Paragraph>
            I am Julián Andrés Bolívar Gutiérrez, web and mobile developer from
            Cali, Colombia. I have rich experience in mobile native app for iOS
            and projects made with Node.js for front-end and some of back-end.
          </Paragraph>

          <Paragraph>
            I studied Interactive Media Design and I also like to see a good
            interface and user experience applied to the project.
          </Paragraph>

          <RaisedButton> Download CV </RaisedButton>
        </AboutMeDescription>

        <SkillsWrapper>
          <Title color="blue">Skills</Title>
          <div>
            <Subtitle>iOS Swift</Subtitle>
          </div>
        </SkillsWrapper>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;
