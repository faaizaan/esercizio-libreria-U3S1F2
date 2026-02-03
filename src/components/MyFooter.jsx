import { Container, Row, Col } from "react-bootstrap";

const MyFooter = function (props) {
  return (
    <Container fluid={true} className="border p-2 mt-3 bg-dark text-white ">
      <Row className="justify-content-center">
        <Col>
          <a href="#" className="text-white text-decoration-none">
            <p className="text-center">{props.contenuto}</p>
          </a>
        </Col>
        <Col>
          <a href="#" className="text-white text-decoration-none">
            <p className="text-center">{props.contenuto}</p>
          </a>
        </Col>
        <Col>
          <a href="#" className="text-white text-decoration-none">
            <p className="text-center">{props.contenuto}</p>
          </a>
        </Col>
        <Col>
          <a href="#" className="text-white text-decoration-none">
            <p className="text-center">{props.contenuto}</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
