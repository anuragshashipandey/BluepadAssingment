import React from 'react';
import Rating from './Rating';
import "../Style/About.css";
import gmaps from '../Media/gmap.png';


export default function About(){
    let abt={
        abt_txt:"We at Bluepad believe in....... At BluePad we aim on.......",
        address:"ABC Road XYZ New Delhi, 100001 India",
        contact:"M: +91 9XXXXXXXXXX Telephone: 0341-XXXXXX",
        gmap_address:"https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5273342,77.1389453,12z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6134594!4d77.2091675"
    }
    const [star, setstar] = React.useState(0);
    return (
        <div className="About">
            <h2>{abt.abt_txt}</h2>
            <p>{abt.address}</p>
            <p>{abt.contact}</p>
            <div className="Abtheader">
                <a href={abt.gmap_address}> 
                    <img src={gmaps} alt="pppppp"/>
                </a>
            </div>
            <div className="Rating">
                <Rating/>
            </div>
            
        </div>
      );
}