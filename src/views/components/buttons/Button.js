import React, { Fragment } from 'react';

const Button = props => {
    const { className, children, ...rest } = props;

    return (
        <Fragment>
            <button type="button" className={`shadow-none ${className}`} {...rest}>
                {children}
            </button>
        </Fragment>
    );
};

export default Button;
