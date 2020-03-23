const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

app.get("/buildings", (req, res, next) => {
    const buildings = [
        {
            name: 'Bauhaus Archive',
            address: '7246 Woodland Rd, Waukesha, WI 53186',
            users: 906,
            offices: 36,
            sqm: 75,
        },
        {
            name: 'Lotus Temple',
            address: '164 S. Carson Court, Newport News, VA 23601',
            users: 876,
            offices: 20,
            sqm: 65,
        },
        {
            name: 'Dome of the Rock',
            address: '123 Johnson Court,Roy, UT 84067',
            users: 564,
            offices: 46,
            sqm: 96,
        },
        {
            name: "Lloyd's Building",
            address: '36 Squaw Creek Dr., Harleysville, PA 19438',
            users: 466,
            offices: 120,
            sqm: 120,
        }
    ]
    res.json(buildings)
})