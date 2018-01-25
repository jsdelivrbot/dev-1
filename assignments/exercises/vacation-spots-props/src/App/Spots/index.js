import React, { Component } from "react";
import Vacation from "./Vacation";

let vacationSpots = [
    {
        place: "Meridian, Idaho",
        price: "$40",
        timeToGo: "Spring"
    }, {
        place: "Cancun",
        price: "$900",
        timeToGo: "Winter"
    }, {
        place: "China",
        price: "$1200",
        timeToGo: "Fall"
    }, {
        place: "Russia",
        price: "$1100",
        timeToGo: "Summer"
    }, {
        place: "Lebanon",
        price: "$400",
        timeToGo: "Spring"
    }
]

class Spots extends Component {
    render() {
        return (
            <div className="flex">
                {vacationSpots.map((spot, i) => {
                    let { place, price, timeToGo } = spot;
                    return <Vacation key={i} place={place} price={price} timeToGo={timeToGo}></Vacation>
                })}
            </div>
        )
    }
}

export default Spots;

