import './App.scss';
import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const getData = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const headers = {
      'Api-Key': API_KEY
  };
    axios.get(BASE_URL + "term=حرم&lat=59.6157432&lng=36.2880443", { headers })
        .then(response => setData(response))
        .catch(error => {
          console.error('There was an error!', error);
      });
  }
  const [data, setData] = useState();
  return (
    <div className="App">
      <main>
        {console.log(data)}
        <div className="searchForm">
          <div className="searchForm__input">
            <input type="text"></input>
          </div>
          <div className="searchForm__button">
            <button onClick={getData}>جستجو</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
