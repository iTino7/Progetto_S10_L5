import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ForcastContainer from "./ForcastContainer";

function ContainerWeather() {
  const [weather, setWeather] = useState({});

  const weatherFetch = async () => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Napoli,it&APPID=de4de94e3b8c5cbbce1f42f2a3b4faa3"
      );
      if (resp.ok) {
        const data = await resp.json();
        setWeather(data);
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherFetch();
  }, []);

  const kelvin = weather.main ? weather.main.temp : null;
  console.log(kelvin);

  const celsius = kelvin - 273;
  const temperature = Math.round(celsius);
  console.log(temperature);

  return (
    <>
      {weather.weather && weather.weather.length > 0 && (
        <Container className="mt-4">
          <Row>
            <Col
              xs={12}
              sm={6}
              md={9}
              className="containerAppWeather d-flex flex-column  justify-content-center mb-3"
            >
              <Container fluid className="my-2 p-0 d-flex flex-column">
                <Row>
                  <Col xs={12} sm={1}>
                    <h4 className="ms-3">{weather.name}</h4>
                  </Col>
                  <Col
                    xs={12}
                    className="d-flex align-items-center flex-column"
                  >
                    <p className="m-0 fw-bold">Current Weather</p>
                    <p className="fs-6 fst-italic m-0">
                      {weather.weather[0].main}
                    </p>
                  </Col>
                </Row>
              </Container>
              <Container
                fluid
                className="m-0 p-0 d-flex justify-content-center "
              >
                <Row className="d-flex flex-md-column-reverse justify-content-center align-items-center">
                  <Col className="p-0 " xs={12} sm={6} md={6}>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt="weather icon"
                      className=""
                    />
                  </Col>
                  <Col
                    xs={12}
                    sm={6}
                    md={2}
                    className="d-flex flex-column align-items-center position-relative "
                  >
                    <h1 className="mb-0 ms-md-4 fw-semibold fontSize">
                      {temperature}
                      <span className="fs-1 position-absolute mt-3 ">°</span>
                    </h1>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <ForcastContainer weather={weather} temperature={temperature} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default ContainerWeather;
