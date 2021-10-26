import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = (props) => {

    const hasParentTitle = !!props.parentTitle;

    const parentBreadcrumbItem = () => {
        return !!props.parentTitle && (<li className="breadcrumb-item">{props.parentTitle}</li>);
    }

    const activeBreadcrumbItem = () => {
        return !!props.title && (<li className="breadcrumb-item active"><strong>{props.title}</strong></li>);
    }

    return (

        <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
                <h2></h2>
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
                    {props.children}
                </div>
            </div>
        </div>

    );
}

export default PageHeader;
