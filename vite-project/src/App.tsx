import Login from './pages/Login'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import CourseId from './pages/Courseid'
import Lesson from './pages/Lesson'
import Lesson2 from './pages/Lesson2'
import Lesson3 from './pages/Lesson3'
import Lesson4 from './pages/Lesson4'
import Lesson5 from './pages/Lesson5'
import Categories from './assets/Components/Categories'


const App = () => {
  return (
    <>
    <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/courses" element={<Home/>}/>           
                <Route path="/courses/:id" element={<CourseId/>}/>           
                <Route path="/categories" element={<Categories/>}/>           
                <Route path="/courses/:id/lesson" element={<Lesson/>}/>           
                <Route path="/courses/:id/lesson2" element={<Lesson2/>}/>           
                <Route path="/courses/:id/lesson3" element={<Lesson3/>}/>           
                <Route path="/courses/:id/lesson4" element={<Lesson4/>}/>           
                <Route path="/courses/:id/lesson5" element={<Lesson5/>}/>           
      </Routes>
    </>
  )
}

export default App