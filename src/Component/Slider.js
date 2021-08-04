import React,{ useState } from 'react';
import '../Style/Slider.css'
import myvid from '../Media/Scrolling.mp4'
const colors = ["#00C49F","#00C49F", "#00C49F", "#FFBB28","#00C49F","#00C49F"];
const delay = 3500;

function Slider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {/* {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div> */}
        {/* <img align="middle" className = " slide landing-logo" src={require('../images/10.png')} alt=""/>    */}
        <video className = "slide landing-logo" autoPlay loop muted>
                <source src={myvid} type="video/mp4"/>
        </video>
        <img align="middle" className = "slide landing-logo" src={require('../Media/1.jpg').default} alt=""/>   
        <img align="middle" className = "slide landing-logo" src={require('../Media/2.jpg').default} alt=""/>   
        <img align="middle" className = "slide landing-logo" src={require('../Media/3.jpeg').default} alt=""/>   
        <img align="middle" className = "slide landing-logo" src={require('../Media/4.jpg').default} alt=""/>
        <video className = "slide landing-logo" autoPlay loop muted>
                <source src={myvid} type="video/mp4"/>
        </video>
        {/* ))} */}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slider