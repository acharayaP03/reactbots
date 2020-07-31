import React from 'react'

const Searchbox = ({searchChange}) => {
    return (
        <input className="bg-white focus:outline-none my-2 focus:shadow-outline border border-green-300 rounded-lg py-2 px-4 sm:w-full  xl:w-3/4 appearance-none leading-normal" 
                type="search"
                aria-label="Search robots" 
                placeholder="Search for robots" 
                onChange = {searchChange}
        />
    );
}


export default Searchbox;