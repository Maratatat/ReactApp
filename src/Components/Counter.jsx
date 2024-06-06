import React from 'react';

const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    function Increment() {
        setCounter(counter + 1)
    }

    function Decrement() {
        setCounter(counter - 1)
    }
    
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
};

export default Counter;