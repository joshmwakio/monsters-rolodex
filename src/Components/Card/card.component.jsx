import React from 'react';
import '../Card/card.styles.css';
export const Card=props=>{
    return <div className='card-container'>
        <img alt="monster" src={'https://robohash.org/'+props.Monster.id+'?set=set2&size=180x180'}/>
        <h3>{props.Monster.name}</h3>
        <p>{props.Monster.email}</p>
    </div>
}