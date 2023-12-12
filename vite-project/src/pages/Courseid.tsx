import React from 'react'
//components
import WelcomeHeader from '../assets/Components/WelcomeHeader'
import ShowDataID from '../assets/shared/CourseApiId'
import './Home.css'

const CourseId = () => {

  return (
    <>
    <div className='container'>
        <WelcomeHeader></WelcomeHeader>
        <ShowDataID></ShowDataID>
    </div>
    </>
  )
}

export default CourseId