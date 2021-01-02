import React, { FC } from "react";
import "keen-slider/keen-slider.min.css";

import { Title, Subtitle, Paragraph } from "components/ui/Text";
import { ArrowLeft, ArrowRight } from "components/slider/ArrowsSlider";
import { DotsContainer, Dot } from "components/slider/Dots";
import ImageDropShadow from "components/awesome/ImageDropShadow";

import { Project } from "types/Project";
import { NavigationWrapper, KeenSlider } from "components/slider/SliderCore";
import { SpecsContainer, SpecsCard, TechItem } from "components/layouts/works";

import useProjectItem from "./hooks/useProjectItem";

const ProjectSection: FC<Project> = (props) => {
  const { name, description, imagesSources, techItems } = props;
  const { sliderRef, slider, currentSlide, dotsSize } = useProjectItem();

  return (
    <div>
      <Title color="blue">{name}</Title>
      <NavigationWrapper>
        <KeenSlider ref={sliderRef} className="keen-slider">
          {imagesSources?.map((src, index) => {
            return (
              <ImageDropShadow
                key={index}
                className="keen-slider__slide"
                src={src}
              />
            );
          })}
        </KeenSlider>

        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => {
                e.stopPropagation();
                slider.prev();
              }}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => {
                e.stopPropagation();
                slider.next();
              }}
              disabled={currentSlide === dotsSize - 1}
            />
          </>
        )}
      </NavigationWrapper>

      <DotsContainer>
        {[...Array(dotsSize)].map((_, idx) => {
          return (
            <Dot
              key={idx}
              active={currentSlide === idx}
              onClick={() => {
                slider.moveToSlideRelative(idx);
              }}
            />
          );
        })}
      </DotsContainer>

      <SpecsContainer>
        <SpecsCard>
          <Subtitle color="blue">Description</Subtitle>
          <Paragraph>{description}</Paragraph>
        </SpecsCard>

        <SpecsCard>
          <Subtitle color="blue">Technologies</Subtitle>
          <div>
            {techItems?.map((item, index) => {
              return <TechItem key={index}>{item}</TechItem>;
            })}
          </div>
        </SpecsCard>
      </SpecsContainer>
    </div>
  );
};

ProjectSection.defaultProps = {
  imagesSources: [],
  techItems: ["Xcode", "Swift", "AWS Lambda", "AWS S3", "CocoaPods"],
};

export default ProjectSection;
