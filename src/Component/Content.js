import React from 'react';
import "../Style/Content .css";

export default function Content(props){
    return (
        <div className="Content">
            <h4>{props.props.name}</h4>
            <p>{props.props.content}</p>
        </div>
      );
}