import React from 'react'
import "../Style/Section.css"
function Section(props) {
    return (
        <div className="Section">
            {props.name}
        </div>
    )
}

export default Section
