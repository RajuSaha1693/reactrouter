import React from 'react';
import learningimg from '../images/learning.png';
const Home = () => (
  <div>
    <section className="hero is-success">
      <div className="hero-body">
        <p className="title">REACT </p>
        <p className="subtitle">Learning with FUN</p>
      </div>
    </section>
    <div className="columns">
      <div className="column is-four-fifths">
        <img src={learningimg} alt="learning" />
      </div>
      <div className="column">Auto</div>
    </div>
  </div>
);

export default Home;
