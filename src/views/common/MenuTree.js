import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const MenuTree = (props) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(!open);
    };

    const buttonRight = () => {

        if (!props.miniNavBarOpen) {
            if (open) {
                return (
                    <FontAwesomeIcon
                        className={'icon-button-menu'}
                        icon={faAngleDown} style={{
                            float: 'right',
                            lineHeight: 1.42857
                        }}></FontAwesomeIcon>
                );
            } else {
                return (
                    <FontAwesomeIcon
                        className={'icon-button-menu'}
                        icon={faAngleLeft} style={{
                            float: 'right',
                            lineHeight: 1.42857
                        }}></FontAwesomeIcon>
                );
            }
        }
    }

    return (
        <>
            <Fragment>

                <li className={open ? 'active' : ''}>
                    <button
                        title={props.label}
                        type="button"
                        className="btnMenu"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleClick()}>

                        <FontAwesomeIcon
                            icon={props.icon}
                            style={{
                                marginRight: '6px'
                            }}
                        ></FontAwesomeIcon>
                        <span className="nav-label">
                            {props.label}
                        </span>
                        {buttonRight()}
                    </button>

                    {/* <Link
                        to={props.path}
                        style={{ textDecoration: 'none' }}
                        onClick={() => handleClick()}>
                        <FontAwesomeIcon
                            icon={props.icon}
                            style={{
                                marginRight: '6px'
                            }}
                        ></FontAwesomeIcon>
                        <span className="nav-label">{props.label}</span>

                        {buttonRight()}
                    </Link> */}

                    <ul className={open ? 'nav nav-second-level' : 'nav nav-second-level collapse'}>
                        {props.children}
                    </ul>

                </li>



            </Fragment>
        </>
    );
}

export default MenuTree;