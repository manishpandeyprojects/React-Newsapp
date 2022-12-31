import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {

  const apiKey = process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0)

    return (
      <BrowserRouter>
            <LoadingBar color='#f11946' height={4} progress={progress} />
            <Navbar /> 
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} category={"general"} country={"in"} />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={"business"} category={"business"} country={"in"} />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={"entertainment"} category={"entertainment"} country={"in"} />} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} category={"general"} country={"in"} />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={"health"} category={"health"} country={"in"} />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={"science"} category={"science"} country={"in"} />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"} category={"sports"} country={"in"} />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"} category={"technology"} country={"in"} />} />
          </Routes>
        </BrowserRouter>
    )
}
