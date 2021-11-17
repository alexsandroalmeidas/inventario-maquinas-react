import React, {
    useEffect,
    useState,
    useCallback,
    useRef,
    useMemo,
    Fragment
} from 'react';
import {
    useTable,
    useSortBy,
    useFilters,
    useGlobalFilter,
    usePagination
} from 'react-table';

import Table from 'react-bootstrap/Table';

import '../../plugins/footable/footable.core.css';

import styled from 'styled-components';
import Pagination from './Pagination';
import GlobalFilter from './GlobalFilter';

const Styles = styled.div`
    .pagination-right{
        float: right !important;
    }

    ul .pagination .pull-right {
        float: right !important;
        border-color: #1ab394 !important;
        color: white !important;
    }

    .table>:not(caption)>*>* {
        border-bottom: none !important;
    }      
`;

const TTable = ({
    columns,
    serverData,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [dataSorted, setDataSorted] = useState(serverData);
    const [loadingData, setLoadingData] = useState(false);
    const [pgCount, setPageCount] = useState(0);
    const sortIdRef = useRef(0);
    const skipPageResetRef = useRef();

    const handleSort = useCallback(({ sortBy, pageSize }) => {

        // Give this sort an ID
        const sortId = ++sortIdRef.current;
        // Set the loading state
        setLoadingData(true);

        //simulate remove server sort
        setTimeout(() => {
            // Doing multisort
            if (serverData && serverData.length > 0 && sortId === sortIdRef.current) {
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

                const firstPageIndex = (currentPage - 1) * pageSize;
                const lastPageIndex = firstPageIndex + pageSize;
                setData(sorted.slice(firstPageIndex, lastPageIndex));

                console.log(dataSorted.slice(0, 10));
                setLoadingData(false);
            }
        }, 1);
    }, [currentPage]);

    const {
        getTableProps
        , getTableBodyProps
        , headerGroups
        , prepareRow
        , page
        , gotoPage
        , state: { pageIndex, pageSize, sortBy, globalFilter, filters }
        , visibleColumns
        , preGlobalFilteredRows
        , setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            manualPagination: true,
            pageCount: pgCount,
            manualSortBy: true,
            autoResetPage: false,
            autoResetExpanded: false,
            autoResetGroupBy: false,
            autoResetSelectedRows: false,
            autoResetSortBy: false,
            autoResetFilters: false,
            autoResetRowState: false
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    useEffect(() => {
        gotoPage(1);
        handleSort({ sortBy, pageSize });
        skipPageResetRef.current = false;
    }, [handleSort, pageIndex, pageSize, sortBy, gotoPage]);

    useMemo(() => {
        if (dataSorted && dataSorted.length > 0) {
            const firstPageIndex = (currentPage - 1) * pageSize;
            const lastPageIndex = firstPageIndex + pageSize;
            setData(dataSorted.slice(firstPageIndex, lastPageIndex));
        }
    }, [currentPage, dataSorted, pageSize]);

    // We don't want to render all of the rows for this example, so cap
    // it for this use case
    const firstPageRows = page.slice(0, 10);

    const loadTable = () => {
        if (loadingData)
            return <p>Loading table...</p>

        return (
            <>
                {/* <div><pre>{JSON.stringify(dataSorted, null, 2)}</pre></div> */}
                <div className="ibox-content">

                    {/* <GlobalFilter
                            preGlobalFilteredRows={preGlobalFilteredRows}
                            globalFilter={globalFilter}
                            setGlobalFilter={setGlobalFilter}
                            setPageCount={setPageCount}
                            setCurrentPage={setCurrentPage}
                            data={data}
                            handleSetData={dataSorted}
                        /> */}

                    <Table responsive className="footable table table-stripped footable-loaded default" {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        // Add the sorting props to control sorting. For this example
                                        // we can add them into the header props
                                        <th {...column.getHeaderProps(column.getSortByToggleProps({ title: column.render("Header") }))}
                                            className="footable-visible footable-sortable footable-sort-indicator">
                                            {column.render("Header")}
                                            {/* Add a sort direction indicator */}
                                            {column.isSorted ? <span className="footable-sort-indicator"></span> : ''}
                                            {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {firstPageRows.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={visibleColumns.length}>
                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={currentPage}
                                        totalCount={dataSorted.length}
                                        pageSize={pageSize}
                                        onPageChange={page => setCurrentPage(page)}

                                    />
                                </td>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
            </>
        );
    }

    return (
        <>
            <Fragment>
                <Styles>
                    {loadTable()}
                </Styles>

            </Fragment>
        </>);
}

export default TTable;
