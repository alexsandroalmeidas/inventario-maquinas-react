import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined);
    }, 1000);

    return (
        <input type="text"
            className="form-control input-sm m-b-xs"
            id="filter"
            placeholder="Pesquisar na tabela"
            value={value || ''}
            onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }} />
    );
}

export default GlobalFilter;
