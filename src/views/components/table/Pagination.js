import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .pagination-right{
        float: right !important;
    }

    .pagination > .active > a,
    .pagination > .active > span,
    .pagination > .active > a:hover,
    .pagination > .active > span:hover,
    .pagination > .active > a:focus,
    .pagination > .active > span:focus {
        background-color: #f4f4f4;
        border-color: #DDDDDD;
        color: inherit;
        cursor: default;
        z-index: 2;
    }
    .pagination > li > a,
    .pagination > li > span {
        background-color: #FFFFFF;
        border: 1px solid #DDDDDD;
        color: inherit;
        float: left;
        line-height: 1.42857;
        margin-left: -1px;
        padding: 4px 10px;
        position: relative;
        text-decoration: none;
    }

    .pagination .footable-page.active a {
        background-color: #1ab394;
        border-color: #1ab394;
        color: white;
    }

    .pagination-item {
        &.disabled {
          pointer-events: none;
          background-color:red;

          .arrow::before {
            border-right: 0.12em solid rgba(0, 0, 0, 0.43);
            border-top: 0.12em solid rgba(0, 0, 0, 0.43);
          }
    
          &:hover {
            background-color: transparent;
            cursor: default;
          }
        }
    }
    
`;

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <Styles>
            <ul className="pagination pull-right pagination-right">
                <li key={'prev' + Math.random()}
                    className={classnames('footable-page-arrow pagination-item', {
                        disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >
                    <Link data-page="prev" to="#prev">‹</Link>
                </li>
                {paginationRange.map(pageNumber => {
                    if (pageNumber === DOTS)
                        return <li className="pagination-item dots">&#8230;</li>;

                    return (
                        <li key={pageNumber}
                            className={classnames('footable-page', {
                                active: pageNumber === currentPage
                            })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            <Link data-page="prev" to="#">{pageNumber}</Link>
                        </li>
                    );
                })}
                <li key={currentPage + lastPage}
                    className={classnames('footable-page-arrow pagination-item', {
                        disabled: currentPage === lastPage
                    })}
                    onClick={onNext}
                >
                    <Link data-page="next" to="#next">›</Link>
                </li>
            </ul>
        </Styles>
    );
};

export default Pagination;
