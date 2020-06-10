import React, { Component } from 'react';

import { connect } from 'react-redux';

import CardComponents from '../Components/CardComponents'

import SearchBox from  '../Components/Searchbox';

import Scroll from '../Components/Scroll';

import ErrorBoundries from '../Components/ErrorBoundries'

import { setSearchField } from "../actions";

const mapStateToProps = state =>{
    return {
       searchField:  state.searchField
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots : []
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
    render() {

        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;

        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return !robots.length ?  <h1>Loading ......</h1> 
            : (
                <div>
                    <h1 className="text-5xl m-6 uppercase cursor-pointer transition duration-500 ease-in-out transform hover:skew-y-3">Robo Friends</h1>
                    <SearchBox searchChange= { onSearchChange } />
                    <Scroll>
                        <ErrorBoundries>
                            <CardComponents robots = {filteredRobots}/>
                        </ErrorBoundries>
                    </Scroll>
                  
                </div>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
