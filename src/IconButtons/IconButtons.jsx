import React from 'react'
import {AiOutlineApple, AiOutlineAmazon} from "react-icons/ai"
import {SiTesla} from "react-icons/si"
import "./Icons.css"

const IconButtons = () => {
  return (
    <div className='iconbuttons'>
        <ul>
            <li style={{'--color': '#5EBD3E'}}><SiTesla/></li>
            <li style={{'--color': '#E23828'}}><AiOutlineApple/></li>
            <li style={{'--color': 'orange'}}><AiOutlineAmazon/></li>
        </ul>
    </div>
  )
}

export default IconButtons