import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true
    }
    return false
  }

  updateCount = () => {
    this.setState(state => {
      return {count: state.count + 1}
    })
  }

  render() {
    console.log('CounterButton')
    return (
      <button color={this.props.color} onClick={this.updateCount} className="bg-blue-500 hover:bg-blue-400 text-white my-6 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;