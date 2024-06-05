import React, {useState} from "react";

function App() {
  const [counter, setCount]=useState(0)

  function Increment(){
    setCount(counter + 1)
  }
  function Decrement(){
    setCount(counter - 1)
  }
  return (
      [<div>
        App works!
      </div>,
        React.createElement("button", {
          disabled: false,
          onClick: () => console.log('clicked')
        }, 'App works!'),

        <div>
          <h1>{counter}</h1>
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement
          </button>
        </div>
      ]
  );
}

export default App;
