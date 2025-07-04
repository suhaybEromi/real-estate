import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";

export default function Carousell() {
  return (
    <section>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col>
            <img width="1000px" src={logo} alt="First slide" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
