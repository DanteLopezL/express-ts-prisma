import { Router } from "express";
import Point from "interfaces/Point.interface";

const mapController = Router()

// Rectoria xd
const origin: Point = {
    id: 0,
    x: 25.724924,
    y: -100.310293
}
let points: Point[] = []

async function makePoints(quantity: number, rangeInMeters: number, startAt: Point) {
    for (let i = 0; i < quantity; i++) {
        const radius = rangeInMeters / 2;
        let randomX = (Math.random() * rangeInMeters) - radius
        let randomY = (Math.random() * rangeInMeters) - radius
        randomX *= Math.pow(10, -5)
        randomY *= Math.pow(10, -5)
        points.push({
            id: i + 1,
            x: origin.x + randomX,
            y: origin.y + randomY
        })

    }
}

mapController.get('/points' , async (req, res) => {
    if (points.length === 0) {
        await makePoints(400, 10000, origin)
    }
    res.status(201).json({markers: points}) 
})

export default mapController