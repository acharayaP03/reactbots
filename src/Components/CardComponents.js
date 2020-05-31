import React from 'react';

import Card from './Card';

const CardComponents = ({robots}) =>{

    const allCards = robots.map((user, index) =>{
        return <Card key={index} id={robots[index].id}  name={robots[index].name}  email={robots[index].email} username = {robots[index].username} /> 
    })
    return(
        <div className="main-container">
            { allCards }
        </div>
    )
}

export default CardComponents;