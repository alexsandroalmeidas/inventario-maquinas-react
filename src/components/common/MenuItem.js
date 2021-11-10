import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';


const MenuItem = (props) => {

    const { path, icon, label, navLabel } = props;

    const getIcon = (icon) => {
        if (!!icon) {
            return (<FontAwesomeIcon
                icon={icon}
                style={{
                    marginRight: '6px'
                }}
            ></FontAwesomeIcon>
            );
        }

        return null;
    }
    return (
        <li key={props.index}>
            <Link
                title={label}
                to={path}
                style={{ textDecoration: 'none' }}>
                {getIcon(icon)}
                {navLabel ? <span className="nav-label">{label}</span> : label}
            </Link>
        </li>
    );
}

export default MenuItem;