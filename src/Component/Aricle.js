import React from 'react'
import Content from './Content'
import "../Style/Article.css"

export default function Article(){
    let obj={name:"Rahul",content:"Article content"}
    return (
        <div className="Article">
            <div className="ar-div-1">   
                <Content props={{...obj}}/>
                <Content props={{...obj}}/>
            </div>
            <div className="ar-div-2">
                <Content props={{...obj}}/>
                <Content props={{...obj}}/>
            </div>
        </div>
      );
}