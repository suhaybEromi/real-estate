import { Container, Row, Col, Form } from "react-bootstrap";

const HeaderSearch = () => {
  return (
    <>
      <Container style={{ width: "1000px" }}>
        <Row className="bg-light p-3 shadow-sm rounded">
          <Col lg="3">
            <h3 className="text-dark">Search</h3>
            <Form.Select>
              <option>Select menu</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col lg="3">
            <h3 className="text-dark">Search</h3>
            <Form.Select>
              <option>Select menu</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col lg="3">
            <h3 className="text-dark">Search</h3>
            <Form.Select>
              <option>Select menu</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col lg="3">
            <h3 className="text-dark">Search</h3>
            <Form.Select>
              <option>Select menu</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <button className="btn btn-outline-dark w-50 mt-4 mx-auto ">
            Search
          </button>
        </Row>
      </Container>
    </>
  );
};

export default HeaderSearch;
