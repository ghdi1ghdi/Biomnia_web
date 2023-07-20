/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";

import img1 from "../../../assets/images/features/feature48/app-store.png";
import img2 from "../../../assets/images/features/feature48/play-store.png";

const C2aComponent = () => {
  return (
    <div>
      <div className="spacer feature42 bg-success-gradiant">
        <Container>
          <Row className="justify-content-center wrap-feature49-box">
            <Col lg="7" md="10" className="text-center">
              <h2 className="title text-white">
                Download our IOS or Android App from Stores
              </h2>
              <h6 className="subtitle text-white op-7 m-b-20">
                Biomnia App을 다운로드 하세요.
              </h6>
              <a href="#" className="m-b-20">
                <img src={img1} alt="img" />
              </a>
              <a href="#" className="m-b-20">
                <img src={img2} alt="img" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default C2aComponent;
