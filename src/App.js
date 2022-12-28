import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <BrowserRouter>
            <Navbar />
          <Routes>
            <Route path="/" element={<News apiKey={this.apiKey} key={"general"} category={"general"} country={"in"} />} />
            <Route path="/business" element={<News apiKey={this.apiKey} key={"business"} category={"business"} country={"in"} />} />
            <Route path="/entertainment" element={<News apiKey={this.apiKey} key={"entertainment"} category={"entertainment"} country={"in"} />} />
            <Route path="/general" element={<News apiKey={this.apiKey} key={"general"} category={"general"} country={"in"} />} />
            <Route path="/health" element={<News apiKey={this.apiKey} key={"health"} category={"health"} country={"in"} />} />
            <Route path="/science" element={<News apiKey={this.apiKey} key={"science"} category={"science"} country={"in"} />} />
            <Route path="/sports" element={<News apiKey={this.apiKey} key={"sports"} category={"sports"} country={"in"} />} />
            <Route path="/technology" element={<News apiKey={this.apiKey} key={"technology"} category={"technology"} country={"in"} />} />
          </Routes>
        </BrowserRouter>
    )
  }
}
