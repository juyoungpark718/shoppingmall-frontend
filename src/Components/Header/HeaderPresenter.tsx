import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled(Content)`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  font-size: 0.8rem;
`;

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <Container>
      <Content>소셜</Content>
      <Content>
        <Link to={`/`}>제목</Link>
      </Content>
      <Menu>
        <Link to={`/login`}>
          <Span>로그인</Span>
        </Link>
        <Link to={`/signup`}>
          <Span>회원가입</Span>
        </Link>
        <Link to={`#`}>
          <Span>장바구니</Span>
        </Link>
      </Menu>
    </Container>
  );
};

export default Header;
