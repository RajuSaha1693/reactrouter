import React from 'react';

import Moment from 'react-moment';
const News = ({ author, title, urlToImage, description, url, publishedAt }) => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column is-two-thirds">
          <p className="title is-3">{title}</p>
          <p className="subtitle is-5">{author}</p>
          <div className="block">{description}</div>
          <nav className="level is-mobile">
            <div className="level-left">
              <p className="level-item" aria-label="retweet">
                <Moment fromNow>{publishedAt}</Moment>
              </p>
              <a className="level-item" aria-label="reply" href={url}>
                Source
              </a>
            </div>
          </nav>
        </div>
        <div className="column">
          <img src={urlToImage} alt="Not Available" />
        </div>
      </div>
    </div>
  );
};
export default News;
