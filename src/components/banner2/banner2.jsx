import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Row, Col } from "reactstrap";

const HeaderBanner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">BIOSPECTRUM</h1>
            <h4 className="subtitle font-light">
              영유아의 초기 마이크로바이옴 형성을 돕는 팀
            </h4>
            {/* <Link
              to="/#coming"
              className="btn btn-info-gradiant m-r-20 btn-md m-t-30 font-14"
            >
              Download Now
            </Link> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBanner2;
