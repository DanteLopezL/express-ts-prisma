import { Interest } from "@prisma/client"

export default interface Point {
    id: number
    x: number,
    y: number,
    interest?: Interest
}