import React from "react";
import styled from "styled-components";
import section1 from "../../images/dalnara/section1.png";

const Container = styled.div``;

const Section = styled.section<any>`
  min-height: 800px;
  background-image: url(${(props) => (props.imgUrl ? props.imgUrl : null)});
  background-position: center;
`;

const Content = styled.div`
  min-height: 800px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Text = styled.div`
  padding: 15rem 20rem;
  text-align: left;
  color: white;
  * {
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 4rem;
    font-weight: 900;
  }

  h5 {
    font-size: 2rem;
    font-weight: 600;
  }

  button {
    padding: 1rem 2rem;
    border-radius: 2rem;
    background: white;
    border: none;
    font-weight: 600;
    &:hover {
      border: 1px solid #0b004f;
      background: #0b004f;
      color: white;
      transition: color 0.2s, background 0.2s, border 0.2s;
    }
  }
`;

const HomePresenter: React.FC = () => {
  return (
    <Container>
      <Section imgUrl={section1}>
        <Content>
          <Text>
            <h2>우리의 일상에,</h2>
            <h2>즐거운 변화와 설렘을</h2>
            <h5>귀걸이 정기구독, 달나라</h5>
            <button>달나라 시작하기</button>
          </Text>
        </Content>
      </Section>
      <Section>1</Section>
      <Section>1</Section>
      <Section>1</Section>
      <Section>1</Section>
    </Container>
  );
};

export default HomePresenter;
