import React, {memo} from 'react';
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default memo(Layout);
