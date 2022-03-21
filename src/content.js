import {React, useState, useEffect} from "react"
import './App.css'
import content1 from './content1.md'
import ReactMarkdown from "react-markdown";

const Content = () => {
        let [content, setContent] = useState("");

        useEffect(()=> {
            fetch(content1)
                .then((res) => res.text())
                .then((text) => {
                    setContent(text)
                })
        }, [])
    
        return (
          <div>
             <ReactMarkdown children ={content}></ReactMarkdown>
          </div>
        )
  }
  
  export default Content;
