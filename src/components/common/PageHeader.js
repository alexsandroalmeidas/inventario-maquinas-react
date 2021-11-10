import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = (props) => {

    const { beforeBreadcrumb, title, children } = props;

    const parentBreadcrumbItem = () => {
        return !!beforeBreadcrumb && (<li className="breadcrumb-item">{beforeBreadcrumb}</li>);
    }

    const activeBreadcrumbItem = () => {
        return !!title && (<li className="breadcrumb-item active"><strong>{title}</strong></li>);
    }

    return (

        <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
                <h1>{children}</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    {parentBreadcrumbItem()}
                    {activeBreadcrumbItem()}
                </ol>
            </div>
            <div className="col-lg-2">
                <div className="title-action">
                    {children}
                </div>
            </div>
        </div>

    );
}

export default PageHeader;
