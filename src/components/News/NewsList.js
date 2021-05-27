import React from 'react';
import User from './News';
const NewsList = ({ newsData }) => {
  let i = 1;
  return (
    <div className="user-list">
      {newsData && newsData.map((news) => <User key={i++} {...news} />)}
    </div>
  );
};
export default NewsList;
