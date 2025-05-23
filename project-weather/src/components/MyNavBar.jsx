import React, { useState } from "react";
import { Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { PersonCircle, Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function MyNavBar() {
  const [searchCity, setSearchCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchCity.trim() !== "") {
      navigate(`/weather/${searchCity}`);
      setSearchCity("");
    }
  };

  return (
    <>
      <Container className="mt-5 ">
        <Row>
          <Col>
            <Navbar className="justify-content-between">
              <Form
                className="d-flex align-items-center"
                onSubmit={handleSubmit}
              >
                <Search className="me-2 fs-5" />
                <Form.Control
                  placeholder="Search for location..."
                  aria-label="location"
                  className="border-white bg-transparent text-white"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
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
