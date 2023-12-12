import React from 'react'
import WelcomeHeader from '../assets/Components/WelcomeHeader';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Lesson5 = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className='container-video'>
      <WelcomeHeader></WelcomeHeader>
      <h1 style={{ color: 'white', marginBottom: 30 }}>Lesson Course</h1>
      <div className='vdo-les'>
        {id === '1' ? <ReactPlayer url='https://www.youtube.com/watch?v=cQT33yu9pY8' controls width="100%" height="100%"/> : null}
        {id === '2' ? <ReactPlayer url='https://www.youtube.com/watch?v=GEuS0tfLfEY' controls width="100%" height="100%"/> : null}
        {id === '3' ? <ReactPlayer url='https://www.youtube.com/watch?v=wUMiBAKLjVg&list=PL0aoTDj9Nwghdp04hgPPSC8pSzgOkyCXS' controls width="100%" height="100%"/> : null}
        {id === '4' ? <ReactPlayer url='https://www.youtube.com/watch?v=Q5g6lYUn6Q4' controls width="100%" height="100%"/> : null}
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

export default Lesson5