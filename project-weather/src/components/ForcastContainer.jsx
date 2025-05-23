import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function ForcastContainer({ weather, temperature }) {
  const [message, setMessage] = useState("");
  const [ora, setOra] = useState("");
  const [weatherForcast, setWeatherForcast] = useState({});

  const forcastFetch = async () => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=40.8333&lon=14.25&appid=de4de94e3b8c5cbbce1f42f2a3b4faa3"
      );

      if (resp.ok) {
        const data = await resp.json();
        setWeatherForcast(data);
      } else {
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    forcastFetch();
  }, []);

  useEffect(() => {
    if (weatherForcast.list) {
      console.log("Previsioni meteo:", weatherForcast.list);
    }
  }, [weatherForcast]);

  useEffect(() => {
    function padZero(num) {
      return num.toString().padStart(2, "0");
    }

    function aggiornaOra() {
      const now = new Date();
      const hours = padZero(now.getHours());
      const minutes = padZero(now.getMinutes());
      setOra(`${hours}:${minutes}`);
    }

    aggiornaOra();
    const timer = setInterval(aggiornaOra, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ora = new Date().getHours();

    if (ora >= 6 && ora < 12) {
      setMessage("Buongiorno!");
    } else if (ora >= 12 && ora < 18) {
      setMessage("Buon pomeriggio!");
    } else if (ora >= 18 && ora < 23) {
      setMessage("Buonasera!");
    } else {
      setMessage("Buona notte!");
    }
  }, []);

  return (
    <>
      <Container className="d-flex flex-column">
        <h4 className="text-center mx-auto">{message}</h4>
        <h5 className="text-center mb-3">{ora}</h5>
        <Row className="d-flex flex-column">
          <Col className="position-relative  text-center m2-3">
            <h1>
              {temperature}
              <span className=" position-absolute">°</span>
            </h1>
            <h5>{weather.weather[0].main}</h5>
          </Col>
          <Col className="">
            <h2 className="text-center mt-2">Days Forecast</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ForcastContainer;
