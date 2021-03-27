import React from "react";
import styled from "styled-components";

const Common = (props) => {
  return (
    <Background id="header">
      <Base>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto content">
              <div className="row">
                <div className=" col-sm-8 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <Group>
                    <Ellipse1></Ellipse1>
                    <Ellipse2></Ellipse2>
                    <Ellipse3></Ellipse3>
                    <Ellipse4></Ellipse4>
                    <Ellipse5></Ellipse5>
                  </Group>
                  <Heading>
                    <b>
                      <span style={{ color: props.highlightcolor }}>
                        {props.highlight}
                      </span>
                      {props.sectionheading}
                    </b>
                  </Heading>
                  <Paragraph className="section-text my-3">
                    {props.sectiontext}
                  </Paragraph>
                </div>
                <Btn className="col-sm-4 order-2 order-lg-2 justify-content-center">
                  <Button
                    color={props.colour}
                    type="button"
                    to={props.visit}
                    className="btn-know-more btn btn-link"
                  >
                    {props.btnname}
                  </Button>
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  z-index: 1;
`;

const Base = styled.div`
  position: relative;
  width: 1113px;
  width: 100%;
  padding: 35px 0;
  background: linear-gradient(90deg, #6a040f 32.6%, #df7028 96.67%);
`;

const Group = styled.div`
  opacity: 0.63;
`;

const Ellipse1 = styled.div`
  position: absolute;
  border-radius: 90%;
  width: 326px;
  height: 196px;
  left: 78px;
  top: 15px;

  background: linear-gradient(
    90deg,
    rgba(106, 4, 15, 0.3) 30.52%,
    rgba(223, 112, 40, 0.3) 96.15%
  );
`;
const Ellipse2 = styled.div`
  position: absolute;
  border-radius: 90%;
  width: 326px;
  height: 196px;
  left: 190px;
  top:  15px;

  background: linear-gradient(
    90deg,
    rgba(106, 4, 15, 0.13) 30.52%,
    rgba(223, 112, 40, 0.13) 96.15%
  );
`;
const Ellipse3 = styled.div`
  position: absolute;
  border-radius: 90%;
  width: 326px;
  height: 196px;
  left: 302px;
  top:  15px;

  background: linear-gradient(
    90deg,
    rgba(106, 4, 15, 0.13) 30.52%,
    rgba(223, 112, 40, 0.13) 96.15%
  );
`;
export const Ellipse4 = styled.div`
  position: absolute;
  border-radius: 90%;
  width: 326px;
  height: 196px;
  left: 414px;
  top:  15px;

  background: linear-gradient(
    90deg,
    rgba(106, 4, 15, 0.13) 30.52%,
    rgba(223, 112, 40, 0.13) 96.15%
  );
`;
export const Ellipse5 = styled.div`
  position: absolute;
  border-radius: 90%;
  width: 326px;
  height: 196px;
  left: 526px;
  top:  15px;

  background: linear-gradient(
    90deg,
    rgba(106, 4, 15, 0.13) 30.52%,
    rgba(223, 112, 40, 0.13) 96.15%
  );
`;


const Heading = styled.h1`
  font-size: 43px;
  color: white;
  letter-spacing: 1px;
  z-index: 2;
  display: inline-flex;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 15px;
  z-index: 2;
`;

const Btn = styled.div`
  text-align: right;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 25px;
  display: inline-block;
  border-radius: 10px;
  padding: 20px 45px;
  text-decoration: none;
  color: #f5f5f5;
  top: 25%;
  margin: 0 0px 0px 0px;
  position: relative;
  background: ${(props) => (props.color ? props.color : "white")};

  &:hover {
    text-decoration: none;
    color: white;
    background: ${(props) => (props.color ? props.color : "white")};
  }
`;

export default Common;
