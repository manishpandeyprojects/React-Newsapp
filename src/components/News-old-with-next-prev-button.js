import React, { Component } from 'react'
import PropTypes from 'prop-types';
import NewsItems from './NewsItems'
import Spinner from './Spinner';


export default class News extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 12;
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalPage: 1
    }
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
  };

  static defaultProps = {
    category: "business",
    country: "in",
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async fetchData(page) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ecf49a858023457ca2baee9120a09dbb&pageSize=${this.pageSize}&page=${page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ article: parseData.articles, totalPage: Math.ceil(parseData.totalResults / this.pageSize), totalResults: parseData.totalResults, loading: false });
  }

  async componentDidMount() {
    this.fetchData(this.state.page);
  }

  handlePrevClick = () => {
    this.setState({ page: this.state.page - 1 })
    this.fetchData(this.state.page - 1);
  }

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1 })
    this.fetchData(this.state.page + 1);
  }



  render() {
    return (
      <>
        <div className='container my-3'>
          <h1 className='text-center' style={{ margin: "40px 0" }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner />}
          <p>Total news: {this.state.totalResults} | Display: {(this.state.page * this.pageSize - this.pageSize + 1)} to {this.state.page * this.pageSize} </p>
          <div className="row" style={this.state.loading ? { opacity: '0.5' } : {}}>
            {this.state.article?.map((element) => {
              return <div className="col-md-4 my-2" key={element.url}>
                <NewsItems title={element.title ? element.title.slice(0, 72) : ""} description={element.description ? element.description.slice(0, 148) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.zeebiz.com/sites/default/files/2022/12/20/217009-m4-freepik.jpg"} newsUrl={element.url ? element.url : ""} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
        <div className='container d-flex justify-content-between my-3'>
          <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Prev</button>
          <button type="button" disabled={this.state.page >= this.state.totalPage} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr; </button>
        </div>
      </>
    )
  }
}
