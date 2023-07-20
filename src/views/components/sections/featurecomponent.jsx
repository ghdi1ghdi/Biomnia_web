/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import img1 from "../../../assets/images/features/feature13/img1.jpg";
import img2 from "../../../assets/images/features/feature13/img2.jpg";
import img3 from "../../../assets/images/features/feature13/img3.jpg";
import img4 from "../../../assets/images/features/feature13/img4.jpg";
import img5 from "../../../assets/images/features/feature30/img1.png";

const FeatureComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">BIOMNIA?</h1>
              <h6 className="subtitle">
                BIOMNIA는 미생물을 먹는 것을 통해 아이들의 건강을 책임지는
                서비스입니다.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-danger label-rounded">
                Feature 1
              </span>
              <h2 className="title">
                What is MicroBiome? <br></br>(마이크로바이움이란?)
              </h2>
              <h6 className="subtitle">
                마이크로 바이옴(Microbiome, 미생물총)이란 체내의 미생물이
                형성하는 군집을 가리키는 것으로서, 이들이 피부나 체내의 균형을
                유지시키는 역할을 한다. 특별한 성분이나 기능을 부여한다는 기존의
                개념과 달리, 이미 체내에 있는 마이크로 바이옴을 활용하여 피부
                건강을 회복시킨다는 점에서, 최근 시장에서 큰 주목을 받게 되었다.
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">소화 및 영양 향상</h5>
                  <p className="m-t-20">
                    마이크로바이옴은 식이 섬유와 같은 어려운 소화성 성분을
                    분해하여 <br></br>우리가 소화 및 흡수할 수 있는 형태로
                    변환합니다.
                    <br></br>이를 통해 소화력을 향상시키고 영양소 흡수를
                    촉진시킵니다. <br></br>임산부와 아이들에게 소화 및 영향력
                    향상은 <br></br>발육과 성장에 매우 중요합니다.
                  </p>
                  {/* <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">면역 체계 강화 </h5>
                  <p className="m-t-20">
                    마이크로바이옴은 우리의 면역 체계에 중요한 영향을 미칩니다.
                    <br></br>올바른 마이크로바이옴 균형은 면역 조절에 도움을
                    주며, <br></br>자가면역 질환 및 알레르기 반응 위험을
                    감소시킬 수 있습니다.<br></br> 면역체계가 완전히 형성되지
                    않은 아이들과 면역체계가 <br></br>약화되어 있는 임산부에게
                    면역 체계 강화가 필수입니다.{" "}
                  </p>
                  {/* <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-success label-rounded">
                Feature 2
              </span>
              <h2 className="title">정기 구독 서비스</h2>
              <h6 className="subtitle">
                개인 맞춤형 식단에 포함되는 식재료를 구독하고 정기적으로
                배송하세요!
              </h6>
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="10">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <img
                          src={img1}
                          width="70"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          검사키트를 통해 아이와 임산부의 미생물 상태를
                          확인하세요.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center"></Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="10">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <img
                          src={img2}
                          width="70"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          신체 정보를 통해 개인 맞춤형 식단을 추천받으세요.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center"></Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="10">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <img
                          src={img3}
                          width="70"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          식단에 포함되는 지역의 싱싱한 로컬 식재료를 구독하고
                          정기적으로 배송하세요.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center"></Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="10">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <img
                          src={img4}
                          width="70"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          냉장고에 있는 식재료를 제외하고 추천하는 오픈마켓에서
                          식재료를 구매하세요.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center"></Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <img
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <span className="label label-info label-rounded">
                      Feature 3
                    </span>
                    <h3 className="title">MAC 기반 식단 추천 서비스</h3>
                    <p>
                      MAC 식단을 기반으로 냉장고에 있는 식재료를 제외한 추천된
                      식재료를 구매하는 오픈마켓과 연동하여 식단을 추천합니다.
                    </p>
                    <a
                      className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
                      href="#"
                    >
                      <span>
                        Explore More <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponent;
