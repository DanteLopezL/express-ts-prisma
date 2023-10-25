import { Interest } from "@prisma/client";

export interface User {
    id: number,
    name: string,
    lastname: string,
    username: string,
    email: string,
    password: string,
    description: string,
    interests: Interest[],
    profilePic: string,
    createdAt: string
}