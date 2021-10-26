import React, { Fragment, useState, useEffect } from "react";
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Footer from "./common/Footer";
import Routes from "./common/Routes";
import { BrowserRouter } from 'react-router-dom';

function Layout() {

    const [miniNavBarOpen, setMiniNavBarOpen] = useState(false);

    const toggleNavigation = () => {
        setMiniNavBarOpen(!miniNavBarOpen);
    };

    useEffect(() => {
        document.body.classList.toggle('mini-navbar', miniNavBarOpen);
    }, [miniNavBarOpen]);


    return (
        <Fragment>
            <div id="wrapper">
                <BrowserRouter>
                    <div>
                        <Sidebar miniNavBarOpen={miniNavBarOpen} />
                        <div id="page-wrapper" className="gray-bg">
                            <Header toggleNavigation={toggleNavigation} />
                            <Routes />
                            <Footer />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </Fragment>
    )
}

export default Layout;
