import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'

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
      allDataTwo = `${allDataOne}`;

      if (allDataOne !== '') {
        newsCategoriesArr.push(allDataTwo);
      }
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

  const articleContainer = {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '4em',
    marginTop: '2em',
  };
  const title = {
    marginTop: '.5em',
    marginBottom: '.25em',
    justifySelf: 'start',
  };
  const articleSource = {
    textAlign: 'left',
  };
  const articleTabs = {
    display: 'flex',
    flexDirection: 'row',
  };
  const articlePublished = {
    marginRight: '1em',
    backgroundColor: '#A9A9A9',
    borderRadius: '7px',
    color: 'white',
    padding: '.5em',
  };
  const articleCat = {
    marginRight: '.25em',
    backgroundColor: 'black',
    borderRadius: '5px',
    color: 'white',
    padding: '.5em',
    fontWeight: 'bold',
  };
  const articleBody = {
    marginTop: '.25em',
    fontsize: '2rem',
  };

  return (
    <React.Fragment>
      <Container style={{marginTop: "3rem"}}>
        <h1>NFL News of the Week</h1>
        <hr style={{margin: ".5rem auto", height: "4px", color: "red"}} />
      </Container>
      {news.map((article) => {
        return (
          <div key={article.newsId} style={articleContainer}>
            <div style={articleTabs}>
              <div style={articlePublished}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-calendar2"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                </svg>{' '}
                {article.newsUpdate}
              </div>
              <div style={articleCat}>
                {article.newsCategories || 'General'}
              </div>
            </div>
            <h1 style={title}>{article.newsTitle}</h1>
            <div>
              <p style={articleBody}>{article.newsContent}</p>
            </div>
            <div style={articleSource}>
              <a href={article.newsLink} target="_blank" rel="noreferrer">
                Source: {article.newsSource}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
