import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import {
    faAngleLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import Button from '../components/buttons/Button';


const MenuTree = (props) => {

    const [open, setOpen] = useState(false);

    const { miniNavBarOpen, icon, label, children } = props;

    const handleClick = () => {
        setOpen(!open);
    };

    const buttonRight = () => {

        if (!miniNavBarOpen) {
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
                    <Button
                        title={label}
                        type="button"
                        className="btnMenu"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleClick()}>

                        <FontAwesomeIcon
                            icon={icon}
                            style={{
                                marginRight: '6px'
                            }}
                        ></FontAwesomeIcon>
                        <span className="nav-label">
                            {label}
                        </span>
                        {buttonRight()}
                    </Button>

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
                        {children}
                    </ul>

                </li>



            </Fragment>
        </>
    );
}

export default MenuTree;