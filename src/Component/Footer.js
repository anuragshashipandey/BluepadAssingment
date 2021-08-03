import React,{useEffect, useRef} from 'react'
import "../Style/Footer.css"
function Footer() {
    const rendercount = useRef(0)
    useEffect(() => {
        rendercount.current=rendercount+1;
    })
    return (    
        <div className="footer"> Visited: {rendercount.current} times.</div>
        )
}

export default Footer
