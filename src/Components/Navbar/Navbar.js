import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar container'>
        <div className='logo'>
      <img src="../Images/headerlogo.svg"/>
      </div>
      <ul className="menu">
        <li className='Home'>Home</li>
        <li className='meeting'>My Meetings</li>
        <li className='earning'>My Earnings</li>
      </ul>
      < div className='login'>
       <div><img className='image' src="../Images/bell.png"/></div>
        <button className='button'>Login</button>
      </div>
</div>
  )
}

export default Navbar
