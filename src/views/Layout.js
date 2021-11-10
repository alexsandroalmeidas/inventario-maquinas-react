import React, { Fragment, useState, useEffect } from "react";
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Footer from "../components/common/Footer";
import Routes from "../components/common/Routes";
import { BrowserRouter } from 'react-router-dom';
import 'pace-js';

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
