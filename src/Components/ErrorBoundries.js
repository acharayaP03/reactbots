import React, { Component } from 'react';


class ErrorBoundries extends Component {
    constructor(props){
        super()

        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, info){
        this.setState({ hasError : true})
    }

    render (){

        if(this.state.hasError){
            return <h1> Opps... Something does'nt look good!!!</h1>
        }

        return this.props.children;

    }
}


export default ErrorBoundries;