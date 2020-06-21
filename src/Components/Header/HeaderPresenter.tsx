import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import headerImg from "../../images/dalnara/header.png";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
`;

const HeaderImg = styled.img`
  width: 200px;
`;

const Menu = styled(Content)``;

const StyledLink = styled(Link)`
  font-weight: inherit;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;

const Span = styled.span`
  font-size: 0.8rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
  background-color: #edc933;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  isLoggedIn: boolean;
  handleLogOut: () => void;
}

const HeaderPresenter: React.FC<IProps> = ({ isLoggedIn, handleLogOut }) => {
  return (
    <Container>
      <Header>
        <Content>
          <Column>
            <Link to={`#`}>
              <FaFacebook size={20} />
            </Link>
            <Link to={`#`}>
              <FaInstagramSquare size={22} />
            </Link>
          </Column>
        </Content>
        <Content>
          <StyledLink to={`/`}>
            <HeaderImg src={headerImg} alt={`dalnara`} />
          </StyledLink>
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
      </Header>
      <Nav>
        <NavContent>
          <StyledLink to={`#`}>달나라 이야기</StyledLink>
          <StyledLink to={`#`}>귀걸이 정기구독</StyledLink>
          <StyledLink to={`#`}>이달의 주제</StyledLink>
          <StyledLink to={`#`}>달나라 스토어</StyledLink>
          <StyledLink to={`#`}>멤버쉽 라운지</StyledLink>
        </NavContent>
      </Nav>
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

const PrivateMenu: React.FC<IPropsPrivate> = ({ handleLogOut }) => {
  return (
    <>
      <StyledLink to={`/profile`}>
        <Span>회원정보</Span>
      </StyledLink>
      <StyledLink to={`/signout`} onClick={handleLogOut}>
        <Span>로그아웃</Span>
      </StyledLink>
    </>
  );
};

HeaderPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

PrivateMenu.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
};

export default HeaderPresenter;
