import React, { useState } from 'react';

function Child(props) {
    return (
        <div>
            <p>{props.message}</p>
            <button onClick={props.onButtonClick}>Change Parent Message</button>
        </div>
    );
}

function StatePropCombined() {
    const [message, setMessage] = useState('Hello from Parent');

    const changeMessage = () => {
        setMessage('Message Updated');
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <Child message={message} onButtonClick={changeMessage} />
        </div>
    );
}

export default StatePropCombined;
