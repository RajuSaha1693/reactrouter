import React, { useEffect, useState } from 'react';
import axios from 'axios';
const RapidApi = () => {
  const [covidData, setCovidData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://covid-19-data.p.rapidapi.com/country',
          params: { name: 'india' },
          headers: {
            'x-rapidapi-key':
              '3e4348e687mshffa3d68479e48b3p1a8921jsnfe83cda73803',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          },
        };
        axios.request(options).then(function (response) {
          console.log(response.data);
          setCovidData(...response.data);
        });
      } catch (error) {
        console.log(error);
      } finally {
        console.log('Done');
      }
    };
    loadData();
  }, []);
  return (
    <div className="card" style={{ paddingTop: '10px' }}>
      <div className="card-content card-covid has-text-white">
        <div className="content ">
          <div className="columns">
            <div className="column ">
              <h4 className="subtitle has-text-white has-text-centered">
                Recoverd
              </h4>
              <h1 className="title has-text-white has-text-centered">
                {covidData.recovered}
              </h1>
            </div>
            <div className="column ">
              <h4 className="subtitle has-text-white has-text-centered">
                Confirmed
              </h4>
              <h1 className="title has-text-white has-text-centered">
                {covidData.confirmed}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RapidApi;
