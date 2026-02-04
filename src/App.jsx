import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import { Col, Container, Row } from "react-bootstrap";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav title="la mia libreria" />
      <Container fluid={true}>
        <Row className="me-auto ms-auto">
          <BookList books={fantasy}></BookList>
        </Row>
      </Container>

      <MyFooter contenuto="questo e il mio footer" />
    </>
  );
}

export default App;
