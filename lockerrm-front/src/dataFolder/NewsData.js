import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function NewsData() {
  const newsUrl = `https://api.sportsdata.io/v3/nfl/scores/json/News?key=${process.env.REACT_APP_SPORTSDATA_KEY}`;

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(newsUrl).then((response) => {
      createNewsObject(response.data);
    });
  }, []);

  function newsTitle(allData) {
    let newsTitleArr = [];
    let allDataOne;
    for (let i in allData) {
      allDataOne = allData[i].Title;

      newsTitleArr.push(allDataOne);
    }
    return newsTitleArr;
  }

  function newsContent(allData) {
    let newsContentArr = [];
    let allDataOne;
    for (let i in allData) {
      allDataOne = allData[i].Content;

      newsContentArr.push(allDataOne);
    }
    return newsContentArr;
  }

  function newsLink(allData) {
    let newsLinkArr = [];
    let allDataOne;
    for (let i in allData) {
      allDataOne = allData[i].Url;

      newsLinkArr.push(allDataOne);
    }
    return newsLinkArr;
  }

  function newsSource(allData) {
    let newsSourceArr = [];
    let allDataOne;
    for (let i in allData) {
      allDataOne = allData[i].Source;

      newsSourceArr.push(allDataOne);
    }
    return newsSourceArr;
  }

  function createNewsObject(data) {
    let allArticles = [];
    let newsContentArr = newsContent(data);
    let newsTitleArr = newsTitle(data);
    let newsLinkArr = newsLink(data);
    let newsSourceArr = newsSource(data);

    newsContentArr.forEach((info) => {
      let article = {};
      article.newsContent = info;
      allArticles.push(article);
    });

    for (let i = 0; i < allArticles.length; i++) {
      allArticles[i].newsId = i + 1;
      allArticles[i].newsTitle = newsTitleArr[i];
      allArticles[i].newsLink = newsLinkArr[i];
      allArticles[i].newsSource = newsSourceArr[i];
    }
    setNews(allArticles);
  }

  const cardLayout = {
    display: 'flex',
    border: '1px solid black',
    width: '90vw',
    margin: '15px auto',
  };

  const cardItem = {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
  };

  const title = {
    textDecoration: 'underline',
    fontSize: '50px',
  };

  const textCenter = {
    textAlign: 'center',
  };

  return (
    <React.Fragment>
      {news.map((article) => {
        return (
          <div key={article.newsId} style={cardLayout}>
            <div style={cardItem}>
              <div style={textCenter}>
                <div style={title}>{article.newsTitle}</div>
                <div>{article.newsContent}</div>
                <div>
                  Source: {article.newsSource} /{' '}
                  <a href={article.newsLink} target="_blank" rel="noreferrer">
                    Check the Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
