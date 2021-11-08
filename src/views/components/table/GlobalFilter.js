import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ globalFilter, setGlobalFilter, preGlobalFilteredRows, setCurrentPage, props }) => {
    // const count = preGlobalFilteredRows.length;

    // const [value, setValue] = useState(globalFilter);

    // const onChange = useAsyncDebounce(value => {
    //     setGlobalFilter(value || undefined);
    //     setCurrentPage(1);
    // }, 200);

    // return (
    //     <input type="text"
    //         className="form-control input-sm m-b-xs"
    //         id="filter"
    //         placeholder={`${count} records...`}
    //         value={value || ""}
    //         onChange={e => {
    //             setValue(e.target.value);
    //             onChange(e.target.value);
    //         }} />
    // );

    const [state, setState] = useState({
        filteredData: [],
        searchInput: ""
    });

    const globalSearch = () => {
        let { searchInput } = state;
        let filteredData = props.data.filter(value => {
            return (
                value.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.status.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.visits
                    .toString()
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            );
        });
        props.handleSetData(
            (filteredData.length > 0 && filteredData) || searchInput
                ? filteredData
                : props.data
        );
    };

    const handleChange = event => {
        setState({ searchInput: event.target.value }, () =>
            globalSearch()
        );
    };

    return (
        <>
            <br />
            <input type="text"
                className="form-control input-sm m-b-xs"
                id="filter"
                size="large"
                name="searchInput"
                value={state.searchInput || ""}
                onChange={handleChange}
                label="Search"
            />
            <br />
            <br />
        </>
    );
}

export default GlobalFilter;
