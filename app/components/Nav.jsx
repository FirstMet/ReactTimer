import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Timer
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by Fragments
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;
