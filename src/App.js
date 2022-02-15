import React from "react"
import './App.css'
import Content from './content.js'
import Indexfile from "./indexfile"

const App = () => {

  return (
    <div>
      <h5> Edit this page</h5>
    <div className = "ap">
      
     <Indexfile />
     <Content />
    </div>
    </div>
  );
}

export default App