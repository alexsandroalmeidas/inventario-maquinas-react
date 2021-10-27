import React from 'react';

const Content = (props) => {

    return (
        <div className="wrapper wrapper-content animated fadeInRight">
            {props.children}
        </div>
    );
}

export default Content;
