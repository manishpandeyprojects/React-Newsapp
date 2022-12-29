import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {

  let pageSize = 6;
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `NewsMonkey - ${capitalizeFirstLetter(props.category)}`;

  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async function fetchData() {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    if(parseData.status === "error"){
      setError(true);
    }else{
      setArticle(parseData.articles);
      setTotalResults(parseData.totalResults);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  });

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${pageSize}&page=${page + 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticle(article.concat(parseData.articles));
    setPage(page + 1);
  };

    return (
      <>
        <div className='container my-3'>
          <h1 className='text-center' style={{ margin: "40px 0" }}>{error?"To many request for today.. Api is not working currently Please check later.": `NewsMonkey - Top ${capitalizeFirstLetter(props.category)} Headlines`}  </h1>
          {loading && <Spinner className="spinner text-center my-3" />}
        </div>

        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalResults}
          loader={<Spinner className="text-center my-3" />}
        >
          {!error && <div className='container'>
            <div className="row" style={loading ? { opacity: '0.5' } : {}}>
              {article?.map((element, index) => {
                return <div className="col-md-4 my-2" key={index}>
                  <NewsItems key={element.url} title={element.title ? element.title.slice(0, 72) : ""} description={element.description ? element.description.slice(0, 148) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.zeebiz.com/sites/default/files/2022/12/20/217009-m4-freepik.jpg"} newsUrl={element.url ? element.url : ""} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>}
        </InfiniteScroll>
      </>
    )
}


News.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
};

News.defaultProps = {
  category: "business",
  country: "in",
};