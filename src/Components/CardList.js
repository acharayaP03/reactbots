import React from 'react';

import Card from './Card';

const CardList = ({robots}) =>{
    return (
        <div className="main-container">
            {
                robots.map((user, index)=>{
                    return (
                        <Card key={index} id={robots[index].id}  name={robots[index].name}  email={robots[index].email} username = {robots[index].username} />
                    )
                })
            }
        </div>
    )
}

export default CardList;