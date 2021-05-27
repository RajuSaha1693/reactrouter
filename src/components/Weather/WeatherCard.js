import React from 'react';

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="card" style={{ paddingTop: '10px' }}>
      <div className="card-content card-weather has-text-white">
        <div className="content">
          <h1 className="title has-text-white" style={{ fontSize: '5em' }}>
            {weatherData.main.temp} &deg;
          </h1>
          <h6
            className="subtitle has-text-white"
            style={{ marginBottom: '2px' }}
          >
            {weatherData.weather[0].main}
          </h6>
          <hr style={{ margin: '0px', height: '1px' }} />
          <p>
            Humidity: {weatherData.main.humidity} % Sunset:{' '}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              'en-IN'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
