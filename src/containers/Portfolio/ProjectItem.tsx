import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Title, Subtitle, Paragraph } from "components/ui/Text";
import { ArrowLeft, ArrowRight } from "components/misc/ArrowsSlider";
import { DotsContainer, Dot } from "components/ui/Dots";
import ImageDropShadow from "components/awesome/ImageDropShadow";

import { Project } from "types/Project";

const NavigationWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 1.2rem;
`;

const KeenSlider = styled.div`
  overflow: visible;
`;

const SpecsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;

  @media (min-width: 1024px) {
    padding: 2rem 0;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    justify-content: center;
  }
`;

const SpecsCard = styled.div`
  @media (min-width: 1024px) {
    padding: 2.2rem;
    border-radius: 1.6rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: var(--white);
  }
`;

const TechItem = styled(Paragraph)`
  display: inline-block;
  height: 4.4rem;
  padding: 0rem 1.2rem;
  margin-right: 1.2rem;
  margin-bottom: 1.2rem;
  border: 2px solid var(--dark-gray);
  border-radius: 2.2rem;
  color: var(--dark-gray);
  line-height: 4rem;
`;

const ProjectSection: FC<Project> = (props) => {
  const { name, description, imagesSources, techItems } = props;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView,
    initial: 0,
    spacing: 24,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  const dotsSize = slider ? slider.details().size - (slidesPerView - 1) : 0;

  useEffect(() => {
    if (!sliderRef.current) return;

    const handlerResize = () => {
      const widthSliderRef = sliderRef.current!.offsetWidth;
      switch (true) {
        case widthSliderRef >= 580 && widthSliderRef < 900:
          setSlidesPerView(2);
          break;
        case widthSliderRef >= 900:
          setSlidesPerView(3);
          break;
        default:
          setSlidesPerView(1);
      }
    };

    window.addEventListener("resize", handlerResize);
    handlerResize();

    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, [sliderRef]);

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
