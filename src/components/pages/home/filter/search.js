import React from "react";

export const Search = (props) => {
    const { searchData } = props;

    const handleChange = (e) => {
    const searchKeys = e.target.value;
    searchData(searchKeys);
    };

    return (
    <div>
        <input
        className="form-control outline-info mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
        />
    </div>
    );
};
