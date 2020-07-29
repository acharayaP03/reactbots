import React, { Component } from 'react';

import { connect } from 'react-redux';

import CardList from '../Components/CardList'

import SearchBox from  '../Components/Searchbox';

import Scroll from '../Components/Scroll';

import ErrorBoundries from '../Components/ErrorBoundries'

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) =>{
    return {
       searchField:  state.searchRobots.searchField,
       robots: state.requestRobots.robots,
       isPending: state.requestRobots.isPending,
       error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots : () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount(){
        this.props.onRequestRobots();
    }
    render() {

        const { robots, searchField, onSearchChange, isPending } = this.props;

        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (
                <div>
                    <h1 className="text-5xl m-6 uppercase cursor-pointer transition duration-500 ease-in-out transform hover:skew-y-3">Robo Friends</h1>
                    <SearchBox searchChange= { onSearchChange } />
                    <Scroll>
                        {          
                            isPending ? 
                                <h1 className="text-5xl m-6 uppercase">loading</h1> :             
                                    <ErrorBoundries>
                                        <CardList robots = {filteredRobots}/>
                                    </ErrorBoundries>
                        }

                    </Scroll>
                  
                </div>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
