import React from 'react';
import Counter from '../../../containers/Counter';
import {
  Link
} from 'react-router-dom'

const CounterPage = () => (
    <div>
        <Counter />
        <Link to="/about">About</Link>
    </div>
);

export default CounterPage;