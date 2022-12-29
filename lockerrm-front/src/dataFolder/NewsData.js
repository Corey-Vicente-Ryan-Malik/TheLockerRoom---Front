import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function NewsData() {
  const newsUrl = `https://api.sportsdata.io/v3/nfl/scores/json/News?key=${process.env.REACT_APP_SPORTSDATA_KEY}`;

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(newsUrl).then((response) => {
      console.log(response.data);
      createNewsObject(response.data);
    });
  }, []);

  function createNewsObject(allData) {

  }

  return <div>Here is some News for yuh!</div>;
}
