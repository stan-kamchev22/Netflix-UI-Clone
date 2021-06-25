import React from 'react'
import "./index.scss"
const Button = ({icon,text}) => {
    return (
        <button className="btn">
            {icon} {text} 
        </button>
    )
}

export default Button
