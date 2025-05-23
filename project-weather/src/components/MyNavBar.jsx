import React from "react";
import { Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { PersonCircle, Search } from "react-bootstrap-icons";

function MyNavBar() {
  return (
    <>
      <Container className="mt-5 ">
        <Row>
          <Col>
            <Navbar className="justify-content-between">
              <Form className="d-flex align-items-center">
                <Search className="me-2 fs-5" />
                <Form.Control
                  placeholder="Search for location..."
                  aria-label="location"
                  className="border-white bg-transparent text-white"
                />
              </Form>
              <Form inline>
                <PersonCircle className="fs-3" />
              </Form>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyNavBar;
