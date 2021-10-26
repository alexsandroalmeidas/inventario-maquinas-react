import React from 'react';

const Content = (props) => {

    return (
        <div className="wrapper wrapper-content animated bounceIn">
            {props.children}
        </div>
    );
}

export default Content;
