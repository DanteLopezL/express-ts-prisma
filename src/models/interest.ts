import { User } from "@prisma/client";

export interface Interest {
    id: number,
    name: string,
    users: User[]
}