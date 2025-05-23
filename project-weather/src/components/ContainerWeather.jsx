
import { Col, Container, Row } from "react-bootstrap";
import ForcastContainer from "./ForcastContainer";

function ContainerWeather({ weatherData }) {
  if (!weatherData || !weatherData.weather) {
    return <p>Loading weather data...</p>;
  }

  const kelvin = weatherData.main?.temp || 0;
  const celsius = kelvin - 273.15;
  const temperature = Math.round(celsius);

  return (
    <Container className="mt-4">
      <Row>
        <Col
          xs={12}
          sm={6}
          md={9}
          className="containerAppWeather d-flex flex-column justify-content-center mb-3"
        >
          <Container fluid className="my-2 p-0 d-flex flex-column">
            <Row>
              <Col xs={12} sm={1}>
                <h4 className="ms-3">{weatherData.name}</h4>
              </Col>
              <Col xs={12} className="d-flex align-items-center flex-column">
                <p className="m-0 fw-bold">Current Weather</p>
                <p className="fs-6 fst-italic m-0">
                  {weatherData.weather[0].main}
                </p>
              </Col>
            </Row>
          </Container>
          <Container fluid className="m-0 p-0 d-flex justify-content-center">
            <Row className="d-flex flex-md-column-reverse justify-content-center align-items-center">
              <Col className="p-0" xs={12} sm={6} md={6}>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </Col>
              <Col
                xs={12}
                sm={6}
                md={2}
                className="d-flex flex-column align-items-center position-relative"
              >
                <h1 className="mb-0 ms-md-4 fw-semibold fontSize">
                  {temperature}
                  <span className="fs-1 position-absolute mt-3">°</span>
                </h1>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <ForcastContainer weather={weatherData} temperature={temperature} />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerWeather;
