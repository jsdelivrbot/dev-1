import React, { Component } from 'react';

function Vacation(props) {
    let { place, price, timeToGo } = props;
    return (
        <div>
            <h1>{place}</h1>
            <h3>{price}</h3>
            <h4>{timeToGo}</h4>
        </div>
    )
}

export default Vacation;