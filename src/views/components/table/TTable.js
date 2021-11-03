import React,
{
    useEffect,
    useState,
    useCallback,
    useRef,
    useMemo,
    Fragment
} from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import 'footable/css/footable.core.min.css';

import styled from 'styled-components';
import Pagination from './Pagination';

let PageSize = 10;

const Styles = styled.div`
    .pagination-right{
        float: right !important;
    }

    ul .pagination .pull-right {
        float: right !important;
        border-color: #1ab394 !important;
        color: white !important;
    }
`;

const TTable = ({
    columns,
    serverData
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(serverData);
    const [dataSorted, setDataSorted] = useState(serverData);
    const [loading, setLoading] = useState(false);
    const [pgCount, setPageCount] = useState(0);

    const sortIdRef = useRef(0);

    const handleSort = useCallback(({ sortBy }) => {

        // Give this sort an ID
        const sortId = ++sortIdRef.current;
        // Set the loading state
        setLoading(true);

        //simulate remove server sort
        setTimeout(() => {
            // Doing multisort
            if (sortId === sortIdRef.current) {
                let sorted = serverData.slice();
                sorted.sort((a, b) => {
                    for (let i = 0; i < sortBy.length; ++i) {
                        if (a[sortBy[i].id] > b[sortBy[i].id])
                            return sortBy[i].desc ? -1 : 1;
                        if (a[sortBy[i].id] < b[sortBy[i].id])
                            return sortBy[i].desc ? 1 : -1;
                    }
                    return 0;
                });
                setDataSorted(sorted);

                const firstPageIndex = (currentPage - 1) * PageSize;
                const lastPageIndex = firstPageIndex + PageSize;
                setData(sorted.slice(firstPageIndex, lastPageIndex));

                console.log(dataSorted.slice(0, 10));
                setLoading(false);               
            }
        }, 100);
    }, [currentPage]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        visibleColumns,
        pageCount,
        state: { pageIndex, pageSize, sortBy }
    } = useTable(
        {
            columns,
            data,
            manualPagination: true,
            initialState: { pageIndex: 0 },
            manualSortBy: true,
            autoResetPage: false,
            autoResetSortBy: false,
            pageSize: PageSize,
            pageCount: pgCount
        },
        useSortBy,
        usePagination
    );

    useEffect(() => {
        gotoPage(1);
        handleSort({ sortBy });
    }, [handleSort, sortBy]);

    useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        setData(dataSorted.slice(firstPageIndex, lastPageIndex));
    }, [currentPage, dataSorted, pageSize]);

    return (
        <>
            <Fragment>
                <Styles>
                    <table className="footable table table-stripped default footable-loaded" {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        // Add the sorting props to control sorting. For this example
                                        // we can add them into the header props
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} data-toggle="true">
                                            {column.render("Header")}

                                            {/* Add a sort direction indicator */}
                                            {column.isSorted ? <span className="footable-sort-indicator"></span> : ''}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                            <tr>
                                {loading ? (
                                    // Use our custom loading state to show a loading indicator
                                    <td colSpan="10000">Loading...</td>
                                ) : (
                                    <td colSpan="10000">
                                        Showing {page.length} of ~{pgCount * pageSize}{" "}
                                        results
                                    </td>
                                )}
                            </tr>
                        </tbody>
                    </table>


                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={serverData.length}
                        pageSize={pageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />





                    {/* <div className="pagination">
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {"<<"}
                    </button>{" "}
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {"<"}
                    </button>{" "}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        {">"}
                    </button>{" "}
                    <button onClick={() => gotoPage(controlledPageCount - 1)} disabled={!canNextPage}>
                        {">>"}
                    </button>{" "}
                    <span>
                        Page{" "}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{" "}
                    </span>
                    <span>
                        | Go to page:{" "}
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(page);
                            }}
                            style={{ width: "100px" }}
                        />
                    </span>{" "}
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div> */}

                </Styles>

            </Fragment>
        </>);

    // return (
    //     <Styles>
    //         {/* <pre>
    //             <code>
    //                 {JSON.stringify(
    //                     {
    //                         pageIndex,
    //                         pageSize,
    //                         pageCount,
    //                         canNextPage,
    //                         canPreviousPage,
    //                     },
    //                     null,
    //                     2
    //                 )}
    //             </code>
    //         </pre> */}

    //         <div className="ibox-content">
    //             {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
    //             <table className="footable table table-stripped default footable-loaded" data-page-size="8" {...getTableProps()}>
    //                 <thead>
    //                     {headerGroups.map(headerGroup => (
    //                         <tr {...headerGroup.getHeaderGroupProps()}>
    //                             {headerGroup.headers.map(column => (
    //                                 // Add the sorting props to control sorting. For this example
    //                                 // we can add them into the header props
    //                                 <th className="footable-visible footable-sortable footable-sort-indicator"
    //                                     {...column.getHeaderProps(column.getSortByToggleProps())}>
    //                                     {column.render('Header')}
    //                                     {/* Add a sort direction indicator */}
    //                                     {column.isSorted ? <span className="footable-sort-indicator"></span> : ''}
    //                                 </th>
    //                             ))}
    //                         </tr>
    //                     ))}
    //                 </thead>
    //                 <tbody {...getTableBodyProps()}>
    //                     {page.map((row, i) => {
    //                         prepareRow(row)
    //                         return (
    //                             <tr {...row.getRowProps()}>
    //                                 {row.cells.map(cell => {
    //                                     return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
    //                                 })}
    //                             </tr>
    //                         )
    //                     })}

    //                     {/* <tr>
    //                     <td colSpan="10000">
    //                         Showing {page.length} of ~{pageCount * pageSize}{' '}
    //                         results
    //                     </td>
    //                 </tr> */}
    //                 </tbody>
    //                 <tfoot>
    //                     <tr>
    //                         <td colSpan={headerGroups.map(headerGroup => headerGroup.headers.length)}>
    //                             <ul className="pagination pull-right pagination-right">
    //                                 <li className="footable-page-arrow disabled">
    //                                     <Link data-page="first" to="#first" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
    //                                         «
    //                                     </Link>
    //                                 </li>
    //                                 <li className={!canPreviousPage ? 'footable-page-arrow disabled' : 'footable-page-arrow'}>
    //                                     <Link data-page="prev" to="#prev" onClick={() => previousPage()} disabled={!canPreviousPage}>
    //                                         ‹
    //                                     </Link>
    //                                 </li>
    //                                 {/* {rows.map(row => {
    //                                 prepareRow(row)
    //                                 return (
    //                                     <tr {...row.getRowProps()}>
    //                                         {row.cells.map(cell => {
    //                                             return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
    //                                         })}
    //                                     </tr>
    //                                 )
    //                             })} */}
    //                                 <li className={!canNextPage ? 'footable-page disabled' : 'footable-page'}>
    //                                     <Link data-page="0" to="#" onClick={() => gotoPage(0)} disabled={!canNextPage}>
    //                                         1
    //                                     </Link>
    //                                 </li>
    //                                 <li className={!canNextPage ? 'footable-page disabled' : 'footable-page'}>
    //                                     <Link data-page="1" to="#" onClick={() => gotoPage(1)} disabled={!canNextPage}>
    //                                         2
    //                                     </Link>
    //                                 </li>
    //                                 <li className={!canNextPage ? 'footable-page disabled' : 'footable-page'}>
    //                                     <Link data-page="2" to="#" onClick={() => gotoPage(2)} disabled={!canNextPage}>
    //                                         3
    //                                     </Link>
    //                                 </li>
    //                                 <li className={!canNextPage ? 'footable-page disabled' : 'footable-page'}>
    //                                     <Link data-page="3" to="#" onClick={() => gotoPage(3)} disabled={!canNextPage}>
    //                                         4
    //                                     </Link>
    //                                 </li>
    //                                 <li className={!canNextPage ? 'footable-page disabled' : 'footable-page'}>
    //                                     <Link data-page="4" to="#" onClick={() => gotoPage(4)} disabled={!canNextPage}>
    //                                         5
    //                                     </Link>
    //                                 </li>
    //                                 <li className="footable-page-arrow">
    //                                     <Link data-page="next" to="#next" onClick={() => nextPage()} disabled={!canNextPage}>
    //                                         ›
    //                                     </Link>
    //                                 </li>
    //                                 <li className="footable-page-arrow">
    //                                     <Link data-page="last" to="#last" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
    //                                         »
    //                                     </Link>
    //                                 </li>
    //                             </ul>
    //                         </td>
    //                     </tr>
    //                 </tfoot>
    //             </table >
    //         </div>
    //     </Styles>
    // );
}

export default TTable;
