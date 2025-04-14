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
                <NavLink to ="/">Home</NavLink>
            </nav>
        </div>
    );
};

export default Hedder;