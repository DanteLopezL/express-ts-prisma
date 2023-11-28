import { Interest, PrismaClient } from "@prisma/client";
import { Router } from "express";
import Point from "interfaces/Point.interface";
import { Comment, Room } from "interfaces/Room.interface";

const mapController = Router()
const interestClient = new PrismaClient().interest

// Rectoria xd
const origin: Point = {
    id: 0,
    x: 25.724924,
    y: -100.310293,
}

let points: Point[] = []
let rooms: Room[] = []

async function makePoints(quantity: number, rangeInMeters: number, startAt: Point) {
    for (let i = 0; i < quantity; i++) {
        const radius = rangeInMeters / 2;
        let randomX = (Math.random() * rangeInMeters) - radius
        let randomY = (Math.random() * rangeInMeters) - radius
        randomX *= Math.pow(10, -5)
        randomY *= Math.pow(10, -5)
        
        const length = await interestClient.count()
        const selectedIndex = Math.floor(Math.random() * Number(length))
        const interests = await interestClient.findMany()
        const selectedInterest = interests.at(selectedIndex)
        
        points.push({
            id: i + 1,
            x: origin.x + randomX,
            y: origin.y + randomY,
            interest: selectedInterest
        })

        rooms.push({
            id: i + 1,
            interest: selectedInterest,
            comments: []
        })
        
    }

}

mapController.get('/points' , async (req, res) => {
    const interest: Interest = req.body
    if (points.length === 0) {
        await makePoints(400, 10000, origin)
    }

    console.log("Giving points...")

    if (interest.id != undefined) return res.status(201).json({markers: points.filter(m => m.interest === interest)})

    return res.status(201).json({markers: points}) 
})

mapController.post('/comment/:roomId', async (req, res) => {
    const comment: Comment = req.body
    const roomId: number = parseInt(req.params.roomId)
    if (comment) {
        const room = rooms.find(r => r.id === roomId)
        const roomIndex = rooms.findIndex(r => r.id === roomId)
        comment.postedAt = new Date().toLocaleTimeString()   
        if (room) {
            rooms[roomIndex].comments.push(comment)
            return res.status(201).json({message: 'Comment successfully added!'})
        }
    }
    return res.status(400).json({message: 'No data given!'})
})

export default mapController