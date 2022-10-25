import React from 'react';
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
                <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;