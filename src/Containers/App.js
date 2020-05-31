import React, { Component } from 'react';

import CardComponents from '../Components/CardComponents'

import SearchBox from  '../Components/Searchbox';

import Scroll from '../Components/Scroll';

import ErrorBoundries from '../Components/ErrorBoundries'



export default class App extends Component {
    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : ''
        }
    }

    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then( users => {
                this.setState ({ robots : users})
            })
       
    }
    onSearchchange = (event) =>{
        this.setState({ searchField: event.target.value})
    }
    render() {

        const { robots, searchField } = this.state

        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        // if(!robots.length){
        //     return <h1>Loading ......</h1> 
        // }else{
        //     return (
        //         <div>
        //             <h1 className="text-5xl m-6 uppercase cursor-pointer transition duration-500 ease-in-out transform hover:skew-y-3">Robo Friends</h1>
        //             <SearchBox searchChange= {this.onSearchchange} />
        //             <Scroll>
        //                 <CardComponents robots = {filteredRobots}/>
        //             </Scroll>
                  
        //         </div>
        //     )
        // }

        return !robots.length ?  <h1>Loading ......</h1> 
            : (
                <div>
                    <h1 className="text-5xl m-6 uppercase cursor-pointer transition duration-500 ease-in-out transform hover:skew-y-3">Robo Friends</h1>
                    <SearchBox searchChange= {this.onSearchchange} />
                    <Scroll>
                        <ErrorBoundries>
                            <CardComponents robots = {filteredRobots}/>
                        </ErrorBoundries>
                    </Scroll>
                  
                </div>
            )
    }
}
