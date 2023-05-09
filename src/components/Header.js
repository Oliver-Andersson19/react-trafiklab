import React from 'react'
import reactLogo from '../assets/react-logo.svg'
import trafikLabLogo from '../assets/trafiklab-logo.svg'


function Header() {
  return (
    <header>
        <img src={trafikLabLogo} alt="" className="trafiklab-logo" />
        <h1>+</h1>
        <img src={reactLogo} alt="" className="react-logo"/>
    </header>
  )
}

export default Header