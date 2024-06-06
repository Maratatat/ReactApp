import React, {useState} from "react";
import Counter from "./Components/Counter";
import counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";

function App() {
    const [value, setValue] = useState('')
    

    return (
        [<div>
            App works!
        </div>,
            React.createElement("button", {
                disabled: false,
                onClick: () => console.log('clicked')
            }, 'App works!'),

            <Counter/>,
            <ClassCounter/>,
            <div>
                <h1>{value}</h1>
                <input type="text" value={value} onChange={event => {
                    setValue(event.target.value)
                }}/>
            </div>
        ]
    );
}

export default App;
