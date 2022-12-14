import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div className="card" style={{width: "100%"}}>
        <img src="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/newsDetails" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}
