import React, { Component } from 'react';

const Select = (props) => (
    <div>
        <label class="siimple-label siimple--color-white">filter: </label>
        <select class="siimple-select" onChange={(e) => props.handleFilter(e)}>
            <option selected>all</option>
            <option>todo</option>
            <option>done</option>
        </select>
    </div>
);

export default Select;