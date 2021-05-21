import React, { useState } from "react";
import slide1 from "../img/slide_01.jpg";
import slide2 from "../img/slide_02.jpg";
import slide3 from "../img/slide_03.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: slide1,
    altText: "Best Offer",
    caption: "New Arrivals On Sales",
  },
  {
    src: slide2,
    altText: "flash deals ",
    caption: "Get your Best Product",
  },
  {
    src: slide3,
    altText: "Last Minutes ",
    caption: "Grap last Minutes deals",
  },
];

const SlideHome = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          className="caption"
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText=""
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default SlideHome;
