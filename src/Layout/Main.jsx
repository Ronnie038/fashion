import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const shouldRenderNavbarAndFooter = location.pathname !== '/';
    
    return (
        <div>
            {shouldRenderNavbarAndFooter && <Navbar></Navbar>}
            <Outlet></Outlet>
            {shouldRenderNavbarAndFooter && <Footer></Footer>}
        </div>
    );
};

export default Main;