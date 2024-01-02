import React from 'react'
import "./Body.css"
import bubble from "./../../Assets/img/bubble.png"
import logo from "./../../Assets/img/logo.png"
import { useNavigate } from 'react-router-dom'
export default function Body() {
 const navigate=useNavigate()

function sub(params) {
return navigate("/chat")
}
  return (
    <>
      <div className='mane'>
        <div className='navbar'>
          <img src={logo} className='mane_logo'></img>
          <button type='button' 
          data-bs-toggle="modal" 
          data-bs-target="#exampleModal"
          onClick={sub}
          className='button'
          >sing up</button>
        </div>
        <div className='bubbles'>
          <img src={bubble} />
          <img src={bubble} />
          <img src={bubble} />
          <img src={bubble} />
          <img src={bubble} />
          <img src={bubble} />
          <img src={bubble} />
        </div>
      </div>

    </>
  )
}
