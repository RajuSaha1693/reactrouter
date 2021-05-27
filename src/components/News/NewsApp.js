import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NewsList from './NewsList';
const App = () => {
  const [newsData, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=89fb8946120a48b7bc370c17dc2b3c7a`
        );
        setNews(response.data.articles);
        console.log(response.data.articles);
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Something went wrong!!!');
      } finally {
        setIsLoading(false);
      }
    };
    loadNews();
  }, []);

  return (
    <div className="main-section">
      <NewsList newsData={newsData} />
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <div className="load-more">{isLoading ? 'Loading...' : ''}</div>
    </div>
  );
};
export default App;
