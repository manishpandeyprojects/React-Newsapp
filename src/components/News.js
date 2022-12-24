import React, { Component } from 'react'
import PropTypes from 'prop-types';
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 12;
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalPage: 1,
      totalResults: 0,
    }
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
  };

  static defaultProps = {
    category: "genral",
    country: "in",
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async fetchData() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ecf49a858023457ca2baee9120a09dbb&pageSize=${this.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState(
      {
        article: this.state.article.concat(parseData.articles),
        totalPage: Math.ceil(parseData.totalResults / this.pageSize),
        totalResults: parseData.totalResults,
        loading: false
      }
    );
  }

  async componentDidMount() {
    this.fetchData();
    this.setState({ loading: true });
  }


  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    this.fetchData();
  };

  render() {
    return (
      <>
        <div className=' my-3'>
          <div className="container">
            <h1 className='text-center' style={{ margin: "40px 0" }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner className="d-flex justify-content-center spinner" />}
          </div>

          <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.fetchMoreData}
            hasMore={this.state.article.length !== this.state.totalResults}
            loader={<Spinner className="d-flex justify-content-center my-3" />} 
          >
            <div className='container my-3'>
              <div className="row" style={this.state.loading ? { opacity: '0.5' } : {}}>
                {this.state.article?.map((element, index) => {
                  return <div className="col-md-4 my-2" key={index}>
                    <NewsItems title={element.title ? element.title.slice(0, 72) : ""} description={element.description ? element.description.slice(0, 148) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.zeebiz.com/sites/default/files/2022/12/20/217009-m4-freepik.jpg"} newsUrl={element.url ? element.url : ""} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}
