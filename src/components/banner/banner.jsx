import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Row, Col } from "reactstrap";

const HeaderBanner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">BIOMNIA</h1>
            <h4 className="subtitle font-light">
              “내 아이의 미래를 위해, 미생물을 먹습니다”
              <br /> For my child’s future, I eat microbes
            </h4>
            <Link
              to="https://biomnia.netlify.app/home/app"
              className="btn btn-md m-t-30 btn-info-gradiant font-14"
            >
              Go to Biomnia
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBanner;
