import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import python from '../images/python.png';
import java from '../images/javat.png';
import tensor from '../images/TensorFlow.png';
import data from '../images/Data-Scientist.png';
import { Link } from 'react-router-dom';
import './GlobalApi.css'

interface Course {
  category: string;
  description: string;
  id: number;
  name: string;
}

const images = ["", python, java, tensor, data];

interface ShowDataProps {
  selectedCategory: string | null;
}

const ShowData: React.FC<ShowDataProps> = ({ selectedCategory }) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    Axios.get('https://borntodev-final-project-api.borntodev.repl.co/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const filteredCourses = selectedCategory
    ? courses.filter(course => course.category === selectedCategory)
    : courses;

  return (

    <div className='cont-card'>
      {filteredCourses.map((course: Course) => (
        <div className='card' key={course.id}>
          <Link to={`/courses/${course.id}`} key={course.id}>
            <img src={images[course.id]} alt={`Image for ${course.name}`} className='img-card'/>
          </Link>
          <h3 className='cou-name'>{course.name}</h3>
          <h5 className='cate-name'>{course.category}</h5>
          <p className='descript'>{course.description}</p>
          <Link to={`/courses/${course.id}`} key={course.id}>
            <button className='cou-btn'>Open Access</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
