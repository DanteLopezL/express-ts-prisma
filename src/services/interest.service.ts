import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { Request, Response } from "express";

const interestClient = new PrismaClient().user

export const createInterest = async (req : Request , res : Response) => {
    try {
        const interestData = req.body
        const interest = await interestClient.create({
            data : interestData
        })
        res.status(201).json({data: interest})
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Failed to create interest due to ' + e });
    }
}

export const getAllInterests = async ( req : Request , res : Response ) => {
    try {
        const allUsers = await interestClient.findMany({

        })
        res.status(200).json({data : allUsers})
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: 'Failed to get interest due to ' + e });
    }
}

export const getInterestById = async (req :Request, res : Response) => {
    try {
        const interestId = req.params.id
        const interestrIdNumber : number = +interestId
        const user = await interestClient.findUnique({
            where: {
                id: interestrIdNumber
            }
        })
        res.status(201).json({data: user})
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: 'Failed to get interest due to ' + e });
    }
}

export const updateInterest = async ( req :Request, res : Response ) => {
    try {
        const userId = req.params.id
        const userIdNumber : number = +userId
        const userData = req.body

        const user = await interestClient.update({
            where: {
                id: userIdNumber
            },
            data : userData
        })
        res.status(201).json({data: user})
    } catch (e) {
        log(e)
        res.status(500).json({ error: 'Failed to update interest due to ' + e });
    }
}

export const deleteInterest = async ( req :Request, res : Response ) => {
    try {
        const userId = req.params.id
        const userIdNumber : number = +userId
        const user = await interestClient.delete({
            where: {
                id: userIdNumber
            }
        })
        res.status(201).json({data: user})
    } catch (e) {
        log(e)
        res.status(500).json({ error: 'Failed to delete interest due to ' + e });
    }
}