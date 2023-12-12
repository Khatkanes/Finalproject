import React, { useState } from 'react';
import SearchBar from '../assets/Components/SearchBar';
import WelcomeHeader from '../assets/Components/WelcomeHeader';
import ShowData from '../assets/shared/GlobalApi';
import Categories from '../assets/Components/Categories';
import './Home.css'
import { motion } from "framer-motion"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };



  return (
    <>
      <div className='container'>
        <WelcomeHeader />
        <SearchBar />
        <Categories selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
        <h1 className='top-cou'>Recommend Course</h1>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}>
          <ShowData selectedCategory={selectedCategory}/>
        </motion.div>
      </div >
    </>
  );
};

export default Home;
