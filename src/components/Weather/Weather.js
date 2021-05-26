import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      // await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=d96db0d75b1dab4defe4511d3b1c6559`
      // );
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=26.2827&lon=92.302&units=metric&APPID=d96db0d75b1dab4defe4511d3b1c6559`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [lat, long]);

  return (
    <div>
      <div className="App">
        {typeof data.main != 'undefined' ? (
          <WeatherCard weatherData={data} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default Weather;
