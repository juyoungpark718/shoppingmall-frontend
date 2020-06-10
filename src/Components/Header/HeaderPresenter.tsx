import React from "react";
import PropTypes from "prop-types";
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

const Menu = styled(Content)``;

const StyledLink = styled(Link)`
  margin-right: 0.5rem;
  &:last-child {
    margin-right: 0;
  }
`;

const Span = styled.span`
  font-size: 0.8rem;
`;

interface IProps {
  isLoggedIn: boolean;
  handleLogOut: () => void;
}

const HeaderPresenter: React.FC<IProps> = ({ isLoggedIn, handleLogOut }) => {
  return (
    <Container>
      <Content>소셜</Content>
      <Content>
        <StyledLink to={`/`}>제목</StyledLink>
      </Content>
      <Menu>
        {isLoggedIn ? (
          <PrivateMenu handleLogOut={handleLogOut} />
        ) : (
          <PublicMenu />
        )}
        <StyledLink to={`#`}>
          <Span>장바구니</Span>
        </StyledLink>
      </Menu>
    </Container>
  );
};

const PublicMenu: React.FC = () => (
  <>
    <StyledLink to={`/login`}>
      <Span>로그인</Span>
    </StyledLink>
    <StyledLink to={`/signup`}>
      <Span>회원가입</Span>
    </StyledLink>
  </>
);

interface IPropsPrivate {
  handleLogOut: () => void;
}

const PrivateMenu: React.FC<IPropsPrivate> = ({ handleLogOut }) => (
  <>
    <StyledLink to={`#`}>
      <Span>회원정보 뜨는곳</Span>
    </StyledLink>
    <StyledLink to={`/signout`} onClick={handleLogOut}>
      <Span>로그아웃</Span>
    </StyledLink>
  </>
);

HeaderPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

PrivateMenu.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
};

export default HeaderPresenter;
