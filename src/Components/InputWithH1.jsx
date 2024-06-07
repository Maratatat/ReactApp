import React from 'react';

const InputWithH1 = () => {
    const [value, setValue] = React.useState('')
    return (<div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>{value}</h1>
        <input type="text" value={value} onChange={event => {
            setValue(event.target.value)
            ChangeWidth(event.target)
        }}/>
    </div>)
};

function ChangeWidth(element){
    element.style.width = ((element.value.length + 1) * 8) + 'px';
}

export default InputWithH1;