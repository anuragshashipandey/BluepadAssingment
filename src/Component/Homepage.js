import React,{ useState } from 'react'
import '../Style/Homepage.css'
import Slider from './Slider'
import Article from './Aricle'

import ReactPlayer from 'react-player'

export default function Homepage(){
    const [pl, setPl] = useState(false);
    const myvid="https://www.youtube.com/watch?v=m9kD3KH7R-o"
    function handleScroll() {
        const currScrollPos = window.scrollY;
       // const { lastScrollPos, showNavLogo } = navState;
    //    console.log(currScrollPos);
        if(!pl && currScrollPos>250&&currScrollPos<650){
            setPl(true)
            //console.log("start ",pl)
        }
        else if(pl && (currScrollPos<=250||currScrollPos>=650)){
            setPl(false);
            
            // console.log("stop ",pl)
        }
        // console.log("start ",pl)
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      });

    return (
        <div className="Homepage">
            <Slider/>
            <div className="Yvid">
            <ReactPlayer url={myvid} playing={pl} controls={true}/>
            <div className="Yviddis">
                    <h3>Youtube Video</h3>
                    <p>Video Details</p>
                </div>
            </div>
            <Article/>           
        </div>
      );
}
// <About/>
