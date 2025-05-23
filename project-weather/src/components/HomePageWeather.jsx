import { Container } from "react-bootstrap";
import ContainerWeather from "./ContainerWeather";
import ContainerWeatherDetails from "./ContainerWeatherDetails";
import MyNavBar from "./MyNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function HomePageWeather() {
  return (
    <>
      <BrowserRouter>
        <Container className="containerApp">
          <MyNavBar />
          <Routes>
            <Route path="/weather" element={<ContainerWeather />} />
            <Route
              path="/weather/:weatherId"
              element={<ContainerWeatherDetails />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default HomePageWeather;
