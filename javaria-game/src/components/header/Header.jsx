import React from 'react'
import './header.css'
import type from "../../assets/img/type.png"
function Header() {
  return (
    <div className=" p-4 " style={{backgroundColor:"#6ED4A7"}}>
      <p className='' style={{fontSize:"60px", fontWeight:"bold"}}>Typing Game
      <img src={type} alt="Hello" width={120} height={120}/>
      </p>
    </div>
  )
}

export default Header