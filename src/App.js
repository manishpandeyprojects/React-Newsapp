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
  render() {
    return (
      <BrowserRouter>
            <Navbar />
          <Routes>
            <Route path="/" element={<News key={"general"} category={"general"} country={"in"} />} />
            <Route path="/business" element={<News key={"business"} category={"business"} country={"in"} />} />
            <Route path="/entertainment" element={<News key={"entertainment"} category={"entertainment"} country={"in"} />} />
            <Route path="/general" element={<News key={"general"} category={"general"} country={"in"} />} />
            <Route path="/health" element={<News key={"health"} category={"health"} country={"in"} />} />
            <Route path="/science" element={<News key={"science"} category={"science"} country={"in"} />} />
            <Route path="/sports" element={<News key={"sports"} category={"sports"} country={"in"} />} />
            <Route path="/technology" element={<News key={"technology"} category={"technology"} country={"in"} />} />
          </Routes>
        </BrowserRouter>
    )
  }
}
