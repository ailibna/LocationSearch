import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import "./locationDetails.scss"
function LocationDetails() {
  let { term } = useParams();
  const [x] = useState(59.6157432);
  const [y] = useState(36.2880443);
  const [data, setData] = useState(null);
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
  useEffect(() => {
    getData(term, x, y);
  },[term, x, y]);
    return (
      <div className="LocationDetails">
        <main>
        <div className={data !== null ?"searchResult" : "searchResult hide"}>
          <table className="searchResult__table">
            <tr className="title">
              <th>عنوان</th>
              <th>آدرس</th>
              <th>دسته بندی</th>
              <th>نوع</th>
              <th>منطقه</th>
            </tr>
            {data !== null ?data.map(e => (
              <tr>
                <td>{e.title}</td>
                <td>{e.address}</td>
                <td>{e.category}</td>
                <td>{e.type}</td>
                <td>{e.region}</td>
              </tr>
              )) : null}
          </table>
          </div>
        </main>
      </div>
      );
}
export default LocationDetails;
