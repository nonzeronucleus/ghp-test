import React from 'react';
import {
  Link
} from 'react-router-dom'

import './style.css';

const Nav = () => (<ul className="nav">

    <li className="link"><Link to="/">Home</Link></li>
    <li className="link"><Link to="/about">About</Link></li>
    </ul>);

export default Nav;