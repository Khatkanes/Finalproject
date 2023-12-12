import React, { useState, useEffect } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Checkbox from '@mui/material/Checkbox';
import { Link, useParams } from 'react-router-dom';

interface Course {
  category: string;
  description: string;
  id: number;
  name: string;
}

interface CourseTensorProps {
  courses: Course | null;
}

const CourseTensor: React.FC<CourseTensorProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [completed, setCompleted] = useState<boolean[]>(() => {
    const storedData = localStorage.getItem('completedTensor');
    return storedData ? JSON.parse(storedData) : [false, false, false, false, false];
  });

  useEffect(() => {
    localStorage.setItem('completedTensor', JSON.stringify(completed));
  }, [completed]);

  const handleCheckboxChange = (index: number) => {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('completedTensor');
  };

  return (
    <>
      <div className='main-cou'>
        <h3 className='cont-cou'
        >Course Content</h3>
        <div style={{ marginTop: 20 }}>
          <div className='box-cou'>
            <div className='bg-cou'>
              <div className='cou-coutent'>
                <Checkbox
                  checked={completed[0]}
                  onChange={() => handleCheckboxChange(0)}
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className='num-cou'>1</p>
                <p className='text-cou'>Introduction</p>
              </div>
              <Link to={`/courses/${id}/lesson`}>
                <PlayCircleIcon className="icon-color" sx={{ fontSize: 50 }} />
              </Link>
            </div>
            <div className='bg-cou'>
              <div className='cou-coutent'>
                <Checkbox
                  checked={completed[1]}
                  onChange={() => handleCheckboxChange(1)}
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className='num-cou'>2</p>
                <p className='text-cou'>About Tensors</p>
              </div>
              <Link to={`/courses/${id}/lesson2`}>
                <PlayCircleIcon className="icon-color" sx={{ fontSize: 50 }} />
              </Link>
            </div>
            <div className='bg-cou'>
              <div className='cou-coutent'>
                <Checkbox
                  checked={completed[2]}
                  onChange={() => handleCheckboxChange(2)}
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className='num-cou'>3</p>
                <p className='text-cou'>Tensorboard</p>
              </div>
              <Link to={`/courses/${id}/lesson3`}>
                <PlayCircleIcon className="icon-color" sx={{ fontSize: 50 }} />
              </Link>
            </div>
            <div className='bg-cou'>
              <div className='cou-coutent'>
                <Checkbox
                  checked={completed[3]}
                  onChange={() => handleCheckboxChange(3)}
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className='num-cou'>4</p>
                <p className='text-cou'>Applications</p>
              </div>
              <Link to={`/courses/${id}/lesson4`}>
                <PlayCircleIcon className="icon-color" sx={{ fontSize: 50 }} />
              </Link>
            </div>
            <div className='bg-cou'>
              <div className='cou-coutent'>
                <Checkbox
                  checked={completed[4]}
                  onChange={() => handleCheckboxChange(4)}
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className='num-cou'>5</p>
                <p className='text-cou'>Features</p>
              </div>
              <Link to={`/courses/${id}/lesson5`}>
                <PlayCircleIcon className="icon-color" sx={{ fontSize: 50 }} />
              </Link>
            </div>
            <button className='btn-reset' onClick={clearLocalStorage}>Restart Lesson</button>
          </div>
        </div>
      </div >
    </>
  );
};

export default CourseTensor;