import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const ContactComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Contact US</h1>
              <h6 className="subtitle">
                Biospectrum 팀과 연락을 원하시면 아래의 양식을 작성해주세요.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1">
        <Container>
          <Row>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Quick Contact</h4>
                    <Form>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="name" />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="email" />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="text"
                              placeholder="message"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              SUBMIT <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-info">
                    <h2 className="text-white">BIOSPECTRUM CEO</h2>
                    <p className="text-white m-t-30 op-8">
                      010-8613-7153
                      <br /> hongtaek1109@gmail.com
                    </p>
                    <p className="text-white op-8">
                      13-13. Hayang-ro. Hayang-eup. Gyeongsan-si.
                      <br /> Gyeongsangbuk-do, KR 38430
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactComponent;
