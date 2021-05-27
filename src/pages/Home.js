import React from 'react';
import learningimg from '../images/learning.png';
import Weather from '../components/Weather/Weather';
import Covid from '../components/RapidApi';
const Home = () => (
  <div>
    <section className="hero is-success">
      <div className="hero-body">
        <p className="title">REACT </p>
        <p className="subtitle">Learning with FUN</p>
      </div>
    </section>
    <div className="columns">
      <div className="column is-two-thirds">
        <img src={learningimg} alt="learning" />
      </div>
      <div className="column">
        <Weather />
        <Covid />
      </div>
    </div>
  </div>
);

export default Home;
