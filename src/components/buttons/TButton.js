import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const TButton = props => {
    const { className, variant, children, ...rest } = props;

    return (
        <Fragment>
            <Button type="button" className={`shadow-none ${variant || className}`} {...rest}>
                {children}
            </Button>
        </Fragment>
    );
};

export default TButton;
