import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav title="la mia libreria" />
      <Container fluid={true}>
        <Row className="me-auto ms-auto">
          <AllTheBooks />
        </Row>
      </Container>

      <MyFooter contenuto="questo e il mio footer" />
    </>
  );
}

export default App;
