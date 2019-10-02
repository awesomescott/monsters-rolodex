import React from 'react';
import './search-box.styles.css';

/**
 * Display a search box.
 * @param {String} placeholder - search box placeholder.
 * @param {Function} handleChange - onChange event handler.
 */
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        placeholder={placeholder}
        type='search'
        onChange={handleChange}
    />
);
