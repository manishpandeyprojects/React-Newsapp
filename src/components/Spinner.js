import React from 'react';
import loading from './ajax-loader.gif'

const Spinner = (props)=> {
  return (
    <div className={props.className}> 
      <img src={loading} alt="Loader" width="50" height="50" />
    </div>
  )
}

export default Spinner;