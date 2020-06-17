import React from "react";
import styled from "styled-components";
import section1 from "../../images/dalnara/section1.png";
import cardimg from "../../images/dalnara/section2-card1.png";
import cardimg2 from "../../images/dalnara/section2-card2.png";
import cardimg3 from "../../images/dalnara/section2-card3.png";
import {
  Section,
  Content,
  Content2,
  Text,
  Text2,
  CardContainer,
  Card2,
  CardBody,
  CardImg,
  H5,
} from "../../Components/Fake/Section";
import Carousel from "../../Components/Carousel/Carousel";

const Container = styled.div``;

const HomePresenter: React.FC = () => {
  return (
    <Container>
      <Section imgUrl={section1} alt={`section1`}>
        <Content>
          <Text>
            <h2>우리의 일상에,</h2>
            <h2>즐거운 변화와 설렘을</h2>
            <h5>귀걸이 정기구독, 달나라</h5>
            <button>달나라 시작하기</button>
          </Text>
        </Content>
      </Section>
      <Section>
        <Content2 dark>
          <Text2>
            <h3>반복되는 일상,</h3>
            <h3>쉽고 즐겁게 기분전환!</h3>
            <h6>달나라는 귀걸이로 매달 새 기분을 즐기는</h6>
            <h6>'신개념 기분전환 서비스 입니다.'</h6>
          </Text2>
          <CardContainer>
            <Card2 bold>
              <CardImg imgUrl={cardimg} alt={`card1`} />
              <CardBody>
                <H5 weight={400}>매달 새롭게 즐기는,</H5>
                <H5 weight={600}>의미있고 멋진 귀걸이</H5>
                <h6>계절의 변화와 트렌드를 고려해</h6>
                <h6>매달 새로운 주제로 찾아갈게요.</h6>
              </CardBody>
            </Card2>
            <Card2 bold>
              <CardImg imgUrl={cardimg2} alt={`card1`} />
              <CardBody>
                <H5 weight={400}>일상이 즐거워지고</H5>
                <H5 weight={600}>다음달이 기다려져요.</H5>
                <h6>지금 딱 끼기좋은 귀걸이가</h6>
                <h6>
                  항상 나를 위해 준비될 거예요.
                  <span role="img" aria-label="smile">
                    🙂
                  </span>
                </h6>
              </CardBody>
            </Card2>
            <Card2 bold>
              <CardImg imgUrl={cardimg3} alt={`card1`} />
              <CardBody>
                <H5 weight={400}>매달 새롭게 즐기는,</H5>
                <H5 weight={600}>의미있고 멋진 귀걸이</H5>
                <h6>계절의 변화와 트렌드를 고려해</h6>
                <h6>매달 새로운 주제로 찾아갈게요.</h6>
              </CardBody>
            </Card2>
          </CardContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "60px 0",
            }}
          >
            <button>달나라 시작하기</button>
          </div>
        </Content2>
      </Section>
      <Section></Section>
      <Section>1</Section>
      <Section>1</Section>
    </Container>
  );
};

export default HomePresenter;
