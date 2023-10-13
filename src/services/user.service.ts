import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { Request, Response, Router } from "express";

const userClient = new PrismaClient().user

export const createUser = async (req : Request , res : Response) => {
    try {
        const userData = req.body
        const user = await userClient.create({
            data : userData
        })
        res.status(201).json({data: user})
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Failed to create user due to ' + e });
    }
}

export const getAllUsers = async ( req : Request , res : Response ) => {
    try {
        const allUsers = await userClient.findMany({

        })
        res.status(200).json({data : allUsers})
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: 'Failed to get users due to ' + e });
    }
}

export const getUserById = async (req :Request, res : Response) => {
    try {
        const userId = req.params.id
        const userIdNumber : number = +userId
        const user = await userClient.findUnique({
            where: {
                id: userIdNumber
            }
        })
        res.status(201).json({data: user})
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: 'Failed to get user due to ' + e });
    }
}

export const updateUser = async ( req :Request, res : Response ) => {
    try {
        const userId = req.params.id
        const userIdNumber : number = +userId
        const userData = req.body

        const user = await userClient.update({
            where: {
                id: userIdNumber
            },
            data : userData
        })
        res.status(201).json({data: user})
    } catch (e) {
        log(e)
        res.status(500).json({ error: 'Failed to update user due to ' + e });
    }
}

export const deleteUser = async ( req :Request, res : Response ) => {
    try {
        const userId = req.params.id
        const userIdNumber : number = +userId
        const user = await userClient.delete({
            where: {
                id: userIdNumber
            }
        })
        res.status(201).json({data: user})
    } catch (e) {
        log(e)
        res.status(500).json({ error: 'Failed to delete user due to ' + e });
    }
}