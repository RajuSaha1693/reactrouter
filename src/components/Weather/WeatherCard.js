import React from 'react';
import moment from 'moment';
const WeatherCard = ({ weatherData }) => {
  return (
    <div className="card" style={{ paddingTop: '5px' }}>
      <header className="card-header has-background-link-dark">
        <p className="card-header-title has-text-white">Weather </p>
      </header>
      <div className="card-content has-background-primary-light has-text-link-dark">
        <div className="content">
          <div className="columns">
            <div className="column">
              <b>
                {moment().format('dddd')},{moment().format('LL')}
              </b>
            </div>
            <div className="column" style={{ textAlign: 'right' }}>
              <b> {weatherData.weather[0].main}</b>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              Temperature: {weatherData.main.temp} &deg;C
            </div>
            <div className="column" style={{ textAlign: 'right' }}>
              Humidity: {weatherData.main.humidity} %
            </div>
          </div>
          <div className="columns">
            <div className="column">
              Sunrise:{' '}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                'en-IN'
              )}
            </div>
            <div className="column" style={{ textAlign: 'right' }}>
              Sunset:{' '}
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                'en-IN'
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
