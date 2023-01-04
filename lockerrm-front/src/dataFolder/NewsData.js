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

  function newsCategories(allData) {
    let newsCategoriesArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData[i].Categories;
      allDataTwo = `Categories: ${allDataOne}`;

      if (allDataOne !== '') {
        newsCategoriesArr.push(allDataTwo);
      }
      // newsCategoriesArr.push(allDataOne);
    }
    return newsCategoriesArr;
  }

  function newsUpdate(allData) {
    let newsUpdateArr = [];
    let allDataOne;
    for (let i in allData) {
      allDataOne = allData[i].TimeAgo;

      newsUpdateArr.push(allDataOne);
    }
    return newsUpdateArr;
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
    let newsCategoriesArr = newsCategories(data);
    let newsUpdateArr = newsUpdate(data);

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
      allArticles[i].newsCategories = newsCategoriesArr[i];
      allArticles[i].newsUpdate = newsUpdateArr[i];
    }
    setNews(allArticles);
  }

  const cardLayout = {
    display: 'flex',
    border: '1px solid black',
    width: '75vw',
    margin: '25px auto',
    fontFamily: 'Times New Roman',
    fontSize: '25px',
    color: 'black',
    backgroundColor: 'lightGrey',
  };
  const cardItem = {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '71vw',
    margin: 'auto',
  };
  const header = {
    fontSize: '60px',
  };
  const footer = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
  };
  const link = {
    color: 'green',
  };

  return (
    <React.Fragment>
      {news.map((article) => {
        return (
          <div key={article.newsId} style={cardLayout}>
            <div style={cardItem}>
              <h1 style={header}>{article.newsTitle}</h1>
              <p>{article.newsContent}</p>
              <div style={footer}>
                {/* <div>Categories: {article.newsCategories}</div> */}
                <div>{article.newsCategories}</div>
                <div>Updated: {article.newsUpdate}</div>
                <div>
                  <a
                    style={link}
                    href={article.newsLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source: {article.newsSource}
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
