import React from "react";
import styled from "styled-components";
import img1 from "../../images/dalnara/img1.png";
import img2 from "../../images/dalnara/img2.png";

const Container = styled.div`
  width: 100%;
`;

const Slider = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: block;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f9f9f9;
    border-radius: 10px;
  }
`;

const Img = styled.img.attrs<any>((props) => {
  return { src: props.imgUrl };
})<any>`
  width: 100%;
`;

const Carousel: React.FC = () => {
  return (
    <Container>
      <Slider>
        <Img imgUrl={img1} alt={"img1"} />
        <Img imgUrl={img2} alt={"img2"} />
        <Img imgUrl={img1} alt={"img1"} />
        <Img imgUrl={img2} alt={"img2"} />
        <Img imgUrl={img1} alt={"img1"} />
        <Img imgUrl={img2} alt={"img2"} />
        <Img imgUrl={img1} alt={"img1"} />
        <Img imgUrl={img2} alt={"img2"} />
        <Img imgUrl={img2} alt={"img2"} />
        <Img imgUrl={img1} alt={"img1"} />
        <Img imgUrl={img2} alt={"img2"} />
      </Slider>
    </Container>
  );
};

export default Carousel;
