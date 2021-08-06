import React, { useState } from "react";

import Rate from "./Rate";
import Review from "./Review";
import "../Style/Rating.css"

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [open, setopen] = useState(true);
  const [rating2, setRating2] = useState(0);
  const [userdetails, setuserdetails] = useState([{name:"Rahul Sharma",email:"rahul@gmail.com",suggestion:"Great Website", star:"5"}]);
  // let userdetails=[{name:"Rahul Sharma",email:"rahul@gmail.com",suggestion:"Great Website", star:"5"},
  // {name:"Rahul Sharma",email:"rahul@gmail.com",suggestion:"Great Website", star:"5"}]
  return (
        <div className="Rating">
          <h3>Kindly Rate us</h3>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          <p>Rating - {rating}</p>
          {rating==5?<h3>🎊🎊THANK YOU for the 5 stars 🎊🎊</h3>:null}
          
          {open&&rating<5?<div className="Reviewbox">
            <img src={require('../Media/cancel.png').default} onClick={()=>{setopen(false)}} className="btn" alt="closebtn"/>
            <Review userdetails={userdetails} setuserdetails={setuserdetails} star={rating}/>
            </div>:null
          }
          <div className="Revi">
          {userdetails!==[]?userdetails.map(x=>(
              <div>
                  <b>{x.name}</b> has commented {x.suggestion}
              </div>
          )):''}
      </div>
        </div>
  );
};
//color={{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//count={10}
export default Rating;