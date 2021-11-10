import React from 'react';

const Footer = () => {

    return (
        <div className="footer">
            <div>
                <strong>Copyright</strong> Tino Tech Informática &copy; 2014-{new Date().getFullYear()}
            </div>
        </div>
    );
}

export default Footer;
