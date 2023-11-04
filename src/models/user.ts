import { Interest } from "@prisma/client";

export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    description?: string,
    interests: Interest[],
    profilePic?: string,
    createdAt: string
}