import React from 'react';

const Counter = ({counter,onAdd,onSubtract}) => (
    <div>
        <button onClick={onAdd}>+</button>
        <button onClick={onSubtract}>-</button>
        Counter = {counter}
    </div>
);

export default Counter;