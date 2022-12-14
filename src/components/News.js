import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h3>NewsMonkey - Top Headlines</h3>
        <div className="row">
            <div className="col-md-4">
              <NewsItems title="MyTitle" description="MyDescription" />
            </div>
            <div className="col-md-4">
              <NewsItems title="MyTitle" description="MyDescription" />
            </div>
            <div className="col-md-4">
              <NewsItems title="MyTitle" description="MyDescription" />
            </div>
        </div>
      </div>
    )
  }
}
