import React, { Component } from 'react';
import loading from './ajax-loader.gif'

export default class Spinner extends Component {

  render() {
    return (
      <div className={this.props.className}> 
        <img src={loading} alt="Loader" width="50" height="50" />
      </div>
    )
  }
}
