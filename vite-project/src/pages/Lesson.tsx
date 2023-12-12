import React from 'react'
import WelcomeHeader from '../assets/Components/WelcomeHeader';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
const Lesson = () => {
  const { id } = useParams<{ id: string }>();


  return (
    <div className='container-video'>
      <WelcomeHeader></WelcomeHeader>
      <h1 style={{ color: 'white', marginBottom: 30 }}>Lesson Course</h1>
      <div className='vdo-les'>
        {id === '1' ? <ReactPlayer className="react-player1" url='https://www.youtube.com/watch?v=Y8Tko2YC5hA' controls width="100%" height="100%" /> : null}
        {id === '2' ? <ReactPlayer className="react-player" url='https://www.youtube.com/watch?v=CBWnBi-awSA' controls width="100%" height="100%"/> : null}
        {id === '3' ? <ReactPlayer className="react-player" url='https://www.youtube.com/watch?v=9NsfX9W80rw' controls width="100%" height="100%"/> : null}
        {id === '4' ? <ReactPlayer className="react-player" url='https://www.youtube.com/watch?v=jO3fjjpu4rE' controls width="100%" height="100%"/> : null}
      </div>
      <div className='des-les'>
        <h4 className='name-les'>Course</h4>
        <p className='name-text'>in this class we will give a lesson for python knowlege and make you get a job and very important basic that nake u advantage and better and have a lot homework for make you understand about python</p>
        <div className='underline'></div>
        <br /> 
        <br />
        <form className='comment'>
          <h4 className='name-les'>Your Comments</h4>
          <textarea name="comment" id="comment" cols={47} rows={10} placeholder='comment....'></textarea>
          <input className='btn-sub' type="submit" value='Submit' />
        </form>
      </div>
    </div>

  )
}

export default Lesson