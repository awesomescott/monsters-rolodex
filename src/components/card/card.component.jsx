import React from 'react';
import './card.styles.css';

/**
 * Display the monster card contents.
 * Cards display the monster's avatar, name, and email.
 * @param {Object} props - monster data.
 */
export const Card = props => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=any&size=180x180`} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);
