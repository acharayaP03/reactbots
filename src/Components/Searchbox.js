import React from 'react'

const Searchbox = ({searchChange}) => {
    return (
        <input className="bg-white focus:outline-none focus:shadow-outline border border-green-300 rounded-lg py-2 px-4 w-1/4 appearance-none leading-normal" 
                type="search" 
                placeholder="Search for robots" 
                onChange = {searchChange}
        />
    );
}


export default Searchbox;