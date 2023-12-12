import React from 'react'
import myImageuser from '../images/Userpicture.jpg'
import './WelcomeHeader.css'

const WelcomeHeader = () => {
  return (
    <>
    <div className='user'>
        <h1 className='user-name'>Hello,Kaopun</h1>
        <img src={myImageuser} alt="usepicture"/>
    </div>
    </>
  )
}

export default WelcomeHeader