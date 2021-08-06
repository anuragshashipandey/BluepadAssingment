import React,{useEffect, useState} from 'react'
import "../Style/Footer.css"
function Footer() {
   // let visited=JSON.parse(window.localStorage.getItem(`visited1`))||0;
    const [visit, setvisit] = useState(1);
   // console.log(visited);
    useEffect(() => {
        //rendercount.current = JSON.parse(window.localStorage.getItem(`visit1`))||0;
       // console.log(Number(JSON.parse(window.localStorage.getItem("visit1xyz"))));
        let prev=visit+Number(JSON.parse(window.localStorage.getItem("visit1xyz")))||0;

        setvisit(visit=>prev);
       // console.log(visit+Number(JSON.parse(window.localStorage.getItem("visit1xyz")))," visited ",visit," ",prev);
    },[])
    useEffect(() => {
        window.localStorage.setItem("visit1xyz",JSON.stringify(visit));
        //console.log(visit,"visit cjhange");
    },[visit])
   // const rendercount = useRef(visited);
    return (    
        <div className="footer"> Visited: {visit} times.</div>
        )
}

export default Footer
