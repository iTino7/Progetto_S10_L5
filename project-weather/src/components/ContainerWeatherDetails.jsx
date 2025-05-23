import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContainerWeather from "./ContainerWeather";

const ContainerWeatherDetails = () => {
  const params = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const resp = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${params.id}&APPID=de4de94e3b8c5cbbce1f42f2a3b4faa3`
        );
        if (!resp.ok) throw new Error("Città non trovata");
        const data = await resp.json();
        setWeatherData(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (params.id) {
      fetchWeather();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!weatherData) {
    return <p>Loading weather details...</p>;
  }

  return <ContainerWeather weatherData={weatherData} />;
};

export default ContainerWeatherDetails;
