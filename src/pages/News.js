import React from 'react';
import NewsApp from '../components/News/NewsApp';
const News = () => {
  return (
    <div>
      <section className="hero is-small is-primary">
        <div className="hero-body">
          <p className="title" style={{ textAlign: 'center' }}>
            Latest News
          </p>
          <p className="subtitle" style={{ textAlign: 'center' }}>
            Update Every Hour{' '}
          </p>
        </div>
      </section>
      <NewsApp />
    </div>
  );
};
export default News;
