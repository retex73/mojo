import React from 'react';

import Building from './Building';

export default function Buildings(props) {

    const { buildings } = props;
    const totalBuildings = buildings.length;


    const locations = buildings.map((building, index) => (
        <Building key={index} building={building} />
    ))

    return (
        <>
            <div>
                <h2>{totalBuildings} Buildings</h2>
            </div>
            {locations}
        </>
    )
}
