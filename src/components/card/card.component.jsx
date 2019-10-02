import React from 'react';
import './card.styles.css';

/**
 * Display the monster card contents.
 * Cards display the monster's avatar, name, and email.
 * @param {Object} monster - monster data.
 */
export const Card = ({ monster }) => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${monster.id}?set=any&size=180x180`} />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
);
