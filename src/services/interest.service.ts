import { Interest, PrismaClient } from "@prisma/client";
import { log } from "console";
import { Request, Response } from "express";

const interestClient = new PrismaClient().interest

export const tryCreateInterest = async (interestData: Interest): Promise<Boolean> => {
    try {

        const match = await interestClient.findFirst({where: {name: interestData.name}})

        if (match != undefined) {
            return false
        }

        await interestClient.create({
            data: interestData
        })
        return true
    } catch (e) {
        console.log(e);
    }
    return false
}

export const tryCreateInterests = async (interests: Interest[]): Promise<Boolean> => {

    for (let i = 0; i < interests.length; i++) {
        if (!await tryCreateInterest(interests[i])) return false;
    
    }
    
    return false;
}

export const getAllInterests = async ( req : Request , res : Response ) => {
    try {
        const allUsers = await interestClient.findMany({

        })

        console.log(`We're giving to ${req.ip} this info:\n\t [${allUsers.map(user => `{ ${user.id} : ${user.name} }`)}]`);

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

const createInterest = async (req : Request , res : Response) => {
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

const updateInterest = async ( req :Request, res : Response ) => {
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

const deleteInterest = async ( req :Request, res : Response ) => {
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