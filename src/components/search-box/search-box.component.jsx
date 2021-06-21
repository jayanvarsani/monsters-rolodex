import React from 'react';
import './search-box.styles.css'

// props destructuring
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)