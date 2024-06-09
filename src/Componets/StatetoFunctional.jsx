import React, { useState } from 'react';

function StatetoFunctional() {
    const [count, setCount] = useState(0);

    return (
        <div>
           <h2> State To Function</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default StatetoFunctional;
