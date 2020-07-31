import React, { Component } from 'react';
import CounterButton from './CounterButton'

class Header extends Component {
    // shouldComponentUpdate(nextProps, nextState){
    //     return false;
    // }

    render(){
        return (
            <div>
                 <h1 className="text-5xl m-6 uppercase cursor-pointer transition duration-500 ease-in-out transform hover:skew-y-3">Robo Friends</h1>
                 <CounterButton />
            </div>
        )
    }
}

export default Header;