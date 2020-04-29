import React from 'react';
import './card-list.style.css'
import '../Card/card.component'
import { Card } from '../Card/card.component';
export const CardList=props=>{
return <div className='card-list'>
        {props.monsters.map(monster=>(
            <Card key={monster.id} Monster={monster}/>
        ))}
    </div>
}
  