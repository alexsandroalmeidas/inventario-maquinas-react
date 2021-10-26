import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';

const MenuItem = (props) => {

    return (
        <li>
            <Link
                title={props.label}
                to={props.path}
                style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon
                    icon={props.icon}
                    style={{
                        marginRight: '6px'
                    }}
                ></FontAwesomeIcon>
                {props.navLabel ? <span className="nav-label">{props.label}</span> : props.label}
            </Link>
        </li>
    );
}

export default MenuItem;