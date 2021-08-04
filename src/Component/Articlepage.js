import React,{useState} from 'react'
import Content from './Content'
import "../Style/Articlepage.css"
import Section from './Section'
function Articlepage() {
    let sec=["Horror","Comedy","Romance","Thriller"]
    const [usebox,setbox]=useState([{name:"Rahul",content:"Article content"},{name:"Rahul",content:"Article content"}])
    function morearticle(){
        let obj=[...usebox];
        for(let i=0;i<15;i++){
            obj.push({name:"Rahul",content:"Article content"});
        }
        setbox(obj);

    }
    return (
        <div className="Articlepage">
            <div className="section">
                <div tabindex="1"><Section  name={sec[0]}/></div>
                <div tabindex="2"><Section  name={sec[1]}/></div>
                <div tabindex="3"><Section  name={sec[2]}/></div>
                <div tabindex="4"><Section  name={sec[3]}/></div>
            </div>
            <div className="Articles">
                {usebox.map((x,idx)=> <Content  props={{...usebox[idx]}}/>)}
            </div>
            <button className="button" onClick={morearticle}> 
            More Articles
            </button>
        </div>
    )
}

export default Articlepage
