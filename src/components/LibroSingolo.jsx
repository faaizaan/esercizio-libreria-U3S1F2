import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

class LibroSingolo extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col className="text-center p-0" key={this.props.asin}>
        <Card
          style={{ width: "18rem", height: "40rem" }}
          className="mx-auto mt-3"
          onClick={selezionato}>
          <Card.Img
            variant="top"
            src={this.props.img}
            style={{ width: "100%", height: "25rem" }}
            className="img-fluid"
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <div className="d-flex justify-content-between">
              <Card.Text>{this.props.category}</Card.Text>
              <Card.Text>{this.props.price}</Card.Text>
            </div>
            <Button variant="primary">buy</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default LibroSingolo;
const selezionato = function () {
  LibroSingolo.this.setState({
    selected: true,
  });
  if (LibroSingolo.this.state === true) {
    Card.className += "border border-primary";
  } else {
    Card.className += "border border-0";
  }
};
