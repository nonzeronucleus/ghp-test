import React from 'react';
import { Link } from 'react-router-dom'

import style from './style.css';

const Nav = () => (<ul className="nav">

    <li className={style.navLink}><Link to="/">Home</Link></li>
    <li className={style.navLink}><Link to="/about">About</Link></li>
    </ul>);

export default Nav;