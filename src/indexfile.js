import {React, useState, useEffect} from "react"
import './App.css'
import index1 from "./index1.md"
import ReactMarkdown from "react-markdown";
import style from './markdown-styles.module.css';

const Indexfile = () => {
    let [content, setContent] = useState("");

    useEffect(()=> {
        fetch(index1)
            .then((res) => res.text())
            .then((text) => {
                setContent(text)
            })
    }, [])

    return (
      <div className = "indexstyle">
         <ReactMarkdown children ={content} className={style.reactMarkDown}></ReactMarkdown>
      </div>
    )
  }
  
  export default Indexfile;