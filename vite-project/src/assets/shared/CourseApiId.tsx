import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Coursephton from '../Components/learningCourse/Coursephton';
import CourseJava from '../Components/learningCourse/CourseJava';
import CourseTensor from '../Components/learningCourse/CourseTensorFlow';
import CourseData from '../Components/learningCourse/CourseData';
import python from '../images/python.png';
import java from '../images/javat.png';
import tensor from '../images/TensorFlow.png';
import data from '../images/Data-Scientist.png';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './CourseApiId.css'


interface Course {
  category: string;
  description: string;
  id: number;
  name: string;
}

const images = ["", python, java, tensor, data];

const container = {
  justifyContent: 'center',
  margin: 0,
  padding: 20,
  gap: 0
};

const ShowDataID: React.FC = () => {
  const [courses, setCourses] = useState<Course | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    Axios.get(`https://borntodev-final-project-api.borntodev.repl.co/courses/${id}`)
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div style={container}>
      {courses ? (
        <>
          <Link to={`/courses`}>
            <ArrowBackIosNewIcon className='icon-Arrows' sx={{ fontSize: 38 }}></ArrowBackIosNewIcon>
          </Link>
          <h3 className='title-name'>{courses.name}</h3>
          <h3 className='teach-name'>By Teacher Prame</h3>
          <img src={images[courses.id]} alt="alt={`Image for ${courses.name}`}"
            className='img-cou' />
          <h3 className='about-cou' >About Course</h3>
          <h3 className='des-cou'>{courses.description}</h3>
          {id === '1' ? <Coursephton courses={null} /> : null}
          {id === '2' ? <CourseJava courses={null} /> : null}
          {id === '3' ? <CourseTensor courses={null} /> : null}
          {id === '4' ? <CourseData courses={null} /> : null}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ShowDataID;
