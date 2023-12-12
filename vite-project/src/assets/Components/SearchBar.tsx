import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
//css
import './SearchBar.css'
const SearchBar = () => {
    return (
        <div className='searchbar'>
            <SearchIcon className='search-Icon'></SearchIcon>
            <input type="text" name="" id="" placeholder='Search' />
        </div>
    )
}
export default SearchBar