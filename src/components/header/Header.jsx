import React from 'react'
import { Navbar } from '../navbar/navbar'
import Logo from "../../assets/logo.png"
import "./header.scss"

export const Header = () => {
  return (
    <header>
      <div className='site-identity'>
        <img src={Logo} className='logo'/>
        <h1>HRnet</h1>
      </div>
      <Navbar/>
    </header>
  )
}
