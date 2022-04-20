import React from 'react'
import './suggestion.css'
export default function Suggestion(props) {
    return (
        <div className="list-container">
        <span className="material-icons room-icon">room</span>
        <li onClick={props.sendText}>{props.text}</li>
      </div>
    )
}
