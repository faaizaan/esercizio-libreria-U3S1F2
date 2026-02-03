import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";
import { Col } from "react-bootstrap";

function AllTheBooks() {
  return fantasy.map((libro) => {
    return (
      <Col
        className="text-center p-0"
        sm={12}
        md={6}
        lg={4}
        xl={3}
        key={libro.asin}>
        <Card
          style={{ width: "18rem", height: "40rem" }}
          className="mx-auto mt-3">
          <Card.Img
            variant="top"
            src={libro.img}
            style={{ width: "100%", height: "25rem" }}
            className="img-fluid"
          />
          <Card.Body>
            <Card.Title>{libro.title}</Card.Title>
            <div className="d-flex justify-content-between">
              <Card.Text>{libro.category}</Card.Text>
              <Card.Text>{libro.price}</Card.Text>
            </div>
            <Button variant="primary">buy</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default AllTheBooks;
