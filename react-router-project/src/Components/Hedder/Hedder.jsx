import React from 'react';
import { Link, NavLink } from 'react-router';
import './Hedder.css'

const Hedder = () => {
    return (
        <div>
            <h3>this is Hedder</h3>
            <nav>
                <NavLink to ="/">Home</NavLink>
                <NavLink to ="/mobiles">Mobiles</NavLink>
                <NavLink to ="/loptop">Laptop</NavLink>
                <NavLink to ="/users">Users</NavLink>
                <NavLink to ="/users2">Users2</NavLink>
                <NavLink to ="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Hedder;