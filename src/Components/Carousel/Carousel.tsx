import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import img1 from "../../images/dalnara/img1.png";
import img2 from "../../images/dalnara/img2.png";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Slider = styled.div`
  width: 100%;
  display: flex;
`;

const Img = styled.img.attrs<any>((props) => {
  return { src: props.imgUrl };
})<any>`
  width: 100%;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

const Carousel: React.FC = () => {
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<any>(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    if (!slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Container>
      <Slider ref={slideRef}>
        <Img imgUrl={img1} alt={"img1"} />
        <Img imgUrl={img2} alt={"img2"} />
      </Slider>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </Container>
  );
};

export default Carousel;
