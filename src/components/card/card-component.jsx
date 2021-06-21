import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        {/* alt is for when image cant be fetched and shown */}
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&180x180`}></img>
        <h2>{props.monster.name}</h2>  
        <p>{props.monster.email}</p>  
    </div>
);

