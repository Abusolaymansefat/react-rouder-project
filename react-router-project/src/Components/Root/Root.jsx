import React from 'react';
import Hedder from '../Hedder/Hedder';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBer from '../SideBar/SideBer';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Hedder></Hedder>
            <div className='root-main'>
                <SideBer></SideBer>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;