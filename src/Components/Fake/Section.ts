import styled from "styled-components";

export const Section = styled.section<any>`
  min-height: 750px;
  margin-bottom: 1rem;
  background-image: url(${(props) => (props.imgUrl ? props.imgUrl : null)});
  background-color: white;
  background-position: center;
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
  h4 {
    font-size: 2rem;
  }
  h5 {
    font-size: 1.5rem;
  }
  h6 {
    font-size: 1rem;
  }
`;

export const Content = styled.div<any>`
  min-height: 750px;
  background-color: rgba(0, 0, 0, 0.3);
  button {
    padding: 1rem 2rem;
    border-radius: 2rem;
    background: ${(props) => (!props.dark ? "white" : "#0b004f")};
    border: none;
    font-weight: 600;
    margin: 0 auto;
    border: 1px solid ${(props) => (props.dark ? "#0b004f" : "white")};

    &:hover {
      border: 1px solid ${(props) => (props.dark ? "white" : "#0b004f")};
      background: ${(props) => (props.dark ? "white" : "#0b004f")};
      color: ${(props) => (props.dark ? "#0b004f" : "white")};
      transition: color 0.2s, background 0.2s, border 0.2s;
    }
  }
`;

export const Text = styled.div`
  padding: 15% 20%;
  text-align: left;
  color: white;
  * {
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: 900;
  }

  h5 {
    font-weight: 600;
  }
`;

export const Content2 = styled(Content)`
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  button {
    color: white;
  }
`;

export const Text2 = styled(Text)`
  padding: 10% 20%;
  text-align: center;
  color: black;
  h3 {
    font-weight: 700;
  }
  h6 {
    line-height: 0.5rem;
  }
`;
export const CardContainer = styled.div`
  height: 350px;
  padding: 0 20%;
  display: flex;
  justify-content: space-between;
  color: black;
`;
export const Card2 = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const H5 = styled.h5<any>`
  text-align: center;
  font-weight: ${(props) => (props.weight ? props.weight : 500)};
`;
export const CardBody = styled.div`
  line-height: 2rem;
  h6 {
    text-align: center;
  }
`;

export const CardImg = styled.img.attrs<any>((props) => {
  return { src: props.imgUrl };
})<any>`
  width: auto;
  height: 170px;
`;
