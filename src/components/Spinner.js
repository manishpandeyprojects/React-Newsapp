import React, { Component } from 'react';
import loading from './ajax-loader.gif'

export default class Spinner extends Component {

  render() {
    return (
      <div className='d-flex justify-content-center spinner'> 
        <img src={loading} alt="Loader" width="50" height="50" />
      </div>
    )
  }
}
