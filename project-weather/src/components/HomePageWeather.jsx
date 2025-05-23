import { Container } from "react-bootstrap";
import ContainerWeather from "./ContainerWeather";
import ContainerWeatherDetails from "./ContainerWeatherDetails";
import MyNavBar from "./MyNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function HomePageWeather() {
  const [weatherData, setWeatherData] = useState(null);

  const kelvin = weatherData?.main?.temp || 0;
  const celsius = kelvin - 273.15;
  const temperature = Math.round(celsius);

  useEffect(() => {
    const weatherFetch = async () => {
      try {
        const resp = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Napoli,it&APPID=de4de94e3b8c5cbbce1f42f2a3b4faa3"
        );
        if (resp.ok) {
          const data = await resp.json();
          setWeatherData(data);
        } else {
          throw new Error("Errore nella fetch");
        }
      } catch (error) {
        console.log(error);
      }
    };
    weatherFetch();
  }, []);

  return (
    <BrowserRouter>
      <Container className="containerApp">
        <MyNavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ContainerWeather
                weatherData={weatherData}
                temperature={temperature}
              />
            }
          />
          <Route
            path="/weather/:id"
            element={<ContainerWeatherDetails />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default HomePageWeather;
