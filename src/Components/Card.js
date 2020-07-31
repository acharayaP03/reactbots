import React  from 'react';

const Card = ({id, name, email, username }) =>{
    //other cleaner way to desturcture the props is above 
    //const {id, image, name, email, username } = props;
    return(
     
         <div className="inline-block px-2 overflow-auto bg-green-300 max-w-xs rounded shadow-lg m-8 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="w-full" src={`https://robohash.org/${id}?200x200`} alt='Robots' />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">{name}</div>
            <p className="text-gray-700 text-base">
              {email}
            </p>
            <p className="text-gray-700 text-base font-bold my-2">
              Username: {username}
            </p>
          </div>
        </div>
    );
}

export default Card;
