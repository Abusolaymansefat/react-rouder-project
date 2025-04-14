import React from 'react';
import Hedder from '../Hedder/Hedder';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Hedder></Hedder>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;