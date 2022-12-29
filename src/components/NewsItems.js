import React from 'react'

export default function NewsItems(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card" style={{ width: "100%" }}>
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%" }}>{source}</span>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {author} On {new Date(date).toUTCString()}</small></p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
      </div>
    </div>
  )
}
