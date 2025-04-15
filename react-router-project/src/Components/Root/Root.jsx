import React from 'react';
import Hedder from '../Hedder/Hedder';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBer from '../SideBar/SideBer';
import './Root.css'

const Root = () => {
    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location)
    return (
        <div>
            <Hedder></Hedder>
            <div className='root-main'>
                <SideBer></SideBer>
                {isNavigation && <span>Loading...</span>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;