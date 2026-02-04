import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

const SingleBook = function (props) {
  return (
    <Col className="text-center p-0" key={props.book.asin}>
      <Card
        style={{ width: "18rem", height: "40rem" }}
        className="mx-auto mt-3">
        <Card.Img
          variant="top"
          src={props.book.img}
          style={{ width: "100%", height: "25rem" }}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text>{props.book.category}</Card.Text>
            <Card.Text>{props.book.price}</Card.Text>
          </div>
          <Button variant="primary">buy</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
