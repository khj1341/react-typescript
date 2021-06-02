import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import withSplitting from '../withSplitting';
import { Posts } from '../pages';

export default function Menu() {

    const [visible, setVisible] = useState<boolean>(false);

    const SplitMe = withSplitting(() => import('../SplitMe'));
    
    const activeStyle = {
        color: 'red',
        fontSize: '30px'
    }

    const handleClick = () => {
        setVisible(true);
    }

    const handleMouseOver = () => {
        Posts.preload();
    }

    return (
        <div>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/aaa">About AAA</Link></li> */}

                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/aaa" activeStyle={activeStyle}>About AAA</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle} onMouseOver={handleMouseOver}>Posts</NavLink></li>
                <li><NavLink to="/count" activeStyle={activeStyle}>Count</NavLink></li>
                <li><NavLink to="/reducer" activeStyle={activeStyle}>Reducer Sample</NavLink></li>
                <li><NavLink to="/todo" activeStyle={activeStyle}>Todo</NavLink></li>
                <button onClick={handleClick}>Click Me!</button>
                {visible && <SplitMe />}
            </ul>
            <hr />
        </div>
    )
}
