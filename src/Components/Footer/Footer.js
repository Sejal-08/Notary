import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="Footer container">
        <div className='rows'>
            <div className='row1'>
            <img className="group" src="../Images/Group 1107375.png"/>
            <p className='urgent'>Urgent Notary Ltd.</p>
            </div>
        <div className='row2'>
            <h3 className='support'>SUPPORT</h3>
            <ul className='sup'>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Payment</li>
            <li>Tracking</li>
            </ul>
        </div>
        <div className='row3'>
            <h3 className='infos'>INFORMATION</h3>
        <ul className='info'>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cancelation Policy</li>
        </ul>
       </div>
       <div className='follow'>
        <h3 className='us'>FOLLOW US</h3>
        <ul className='social'>
        <li><img src="../Images/linkedinn.png"/></li>
        <li><img src="../Images/faceboook.png"/></li>
        <li><img src="../Images/insta.png"/></li>
        </ul>
        <h4 className='urge'>URGENT NOTARY</h4>
        </div>


        </div>
        

      
    </div>
  )
}

export default Footer
