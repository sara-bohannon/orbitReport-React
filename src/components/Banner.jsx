import React from "react";

function banner () {
    console.log('Banner component rendered');
    return (
        <header>
            <h1>Orbit Report</h1>
            <p>Click on the buttons to see the satellites in that orbit type</p>
        </header>
    );
}

export default banner;