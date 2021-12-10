import './App.scss';
import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const getData = (location, x, y) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const headers = {
      'Api-Key': API_KEY
  };
    axios.get(BASE_URL + "term=" + location + "&lat=" + x +"&lng=" + y, { headers })
        .then(response => setData(response.data.items))
        .catch(error => {
          console.error('There was an error!', error);
      });
  }
  const termInputHandler = (e) =>{
    setTerm(e.target.value)
    if (e.target.value === ""){
      setData(null)
    }
  }
  const serachHandler = () =>{
    let location = term;
    let x = 59.6157432;
    let y = 36.2880443;
    getData(location, x, y);
  }
  const [data, setData] = useState(null);
  const [term, setTerm] = useState("");
  return (
    <div className="App">
      <main>
        <div className="searchSection">
          <div className="searchForm">
            <div className="searchForm__input">
              <input type="text" onChange={termInputHandler}></input>
            </div>
            <div className="searchForm__button">
              <button onClick={serachHandler}>جستجو</button>
            </div>
          </div>
          <div className={data !== null && term !=="" ?"searchResult" : "searchResult hide"}>
          {data !== null ? data.length === 0 ? <span className="notFoundData">متاسفانه نتیجه ای یافت نشد.</span> :
          <table className="searchResult__table">
            <tr className="title">
              <th>عنوان</th>
              <th>منطقه</th>
            </tr>
            {data !== null ?data.map(e => (
              <tr>
                <td>{e.title}</td>
                <td>{e.region}</td>
              </tr>
              )) : null}
          </table>
          : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
