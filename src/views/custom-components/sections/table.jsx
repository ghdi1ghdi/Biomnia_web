import React from "react";
import { Container, Row, Col, Table } from "reactstrap";

const PageTable = () => {
  return (
    <div>
      <div className="spacer bg-light" id="table-component">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Our Team</h1>
              <h6 className="subtitle">
                제 5회 대학 연합 창업 캠프 뿅뿅 창업 오락실 3조 Biospectrum
                팀원들을 소개합니다.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md="12">
            <div className="table-responsive">
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>School</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>홍승택</td>
                    <td>가톨릭대학교</td>
                    <td>@Seungtaeg</td>
                    <td>
                      <span className="label label-danger">CEO & CFO</span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>박지민</td>
                    <td>아주대학교</td>
                    <td>@Jimin</td>
                    <td>
                      <span className="label label-info">COO & RA</span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>김지현</td>
                    <td>중앙대학교</td>
                    <td>@Jiyeon</td>
                    <td>
                      <span className="label label-warning">Maketer</span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>백채현</td>
                    <td>중앙대학교</td>
                    <td>@Chaehyeon</td>
                    <td>
                      <span className="label label-warning">Maketer</span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>이정호</td>
                    <td>한양대학교 ERICA</td>
                    <td>@Jeongho</td>
                    <td>
                      <span className="label label-success">Developer</span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>윤지연</td>
                    <td>한양대학교 ERICA</td>
                    <td>@Jiyeon</td>
                    <td>
                      <span className="label label-success">Developer</span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>김수진</td>
                    <td>멘토님</td>
                    <td>@Sujin</td>
                    <td>
                      <span className="label label-megna">Mentor</span>{" "}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageTable;
