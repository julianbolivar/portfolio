import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

function useProjectItem() {
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

  return { sliderRef, slider, currentSlide, dotsSize };
}

export default useProjectItem;
