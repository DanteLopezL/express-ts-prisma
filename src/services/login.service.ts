import { PrismaClient } from "@prisma/client"
import { LoginUserDTO } from "DTO/LoginUserDto"
import { Request, Response } from "express"

const userClient = new PrismaClient().user

export const loginNow = async (req: Request, res: Response) => {
    const credentials: LoginUserDTO = req.body;
    console.log(JSON.stringify(credentials))

    const match = await userClient.findUnique({where: {
        username: credentials.username,
        password: credentials.password
    }})

    if (match === null) return res.status(400).json({
        "err": "invalidCredentials"
    })

    return res.status(201).json({
        user: {
            id: match.id,
            username: match.username,
            email: match.email,
            description: match.description,
            profilePic: match.profilePic,
            createdAt: match.createdAt
        }
    })
}