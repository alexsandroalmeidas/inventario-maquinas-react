import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ toggleNavigation }) => {

    return (

        <div className="row border-bottom">
            <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0}}>
                <div className="navbar-header">
                    <a className="navbar-minimalize minimalize-styl-2 btn btn-primary"
                        onClick={(e) => toggleNavigation(e)}
                        href="#">
                        <FontAwesomeIcon
                            icon={faBars}
                        ></FontAwesomeIcon>
                    </a>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li style={{ float: 'right' }}>
                        <Link to='' style={{ textDecoration: 'none', minHeight: '5px' }}>
                            Nome do Usuário
                            <FontAwesomeIcon
                                icon={faUser}
                                style={{
                                    marginLeft: '6px'
                                }}
                            ></FontAwesomeIcon>
                        </Link>
                    </li>
                </ul>
            </nav >
        </div >

    );
}

export default Header;
