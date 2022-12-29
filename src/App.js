import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API
  
  state = {
    progress: 0,
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <BrowserRouter>
            <LoadingBar color='#f11946' height={4} progress={this.state.progress} />
            <Navbar /> 
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"general"} category={"general"} country={"in"} />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"business"} category={"business"} country={"in"} />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"entertainment"} category={"entertainment"} country={"in"} />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"general"} category={"general"} country={"in"} />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"health"} category={"health"} country={"in"} />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"science"} category={"science"} country={"in"} />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"sports"} category={"sports"} country={"in"} />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"technology"} category={"technology"} country={"in"} />} />
          </Routes>
        </BrowserRouter>
    )
  }
}
