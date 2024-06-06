import React from 'react';

class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.Increment=this.Increment.bind(this);
        this.Decrement=this.Decrement.bind(this);
    }
    
    Increment() {
        this.setState({ counter: this.state.counter + 1 });
    }
    
    Decrement() {
        this.setState({ counter: this.state.counter - 1 });
    }
    render() {
        return (<div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.Increment}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
        </div>)
    }
}

export default Counter;