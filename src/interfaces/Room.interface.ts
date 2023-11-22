import { Interest } from "@prisma/client";
import UserDtoOut from "DTO/UserDtoOut";

export interface Comment {
    id: number,
    content: string,
    user: UserDtoOut
    postedAt?: string
}

export interface Room {
    id: number;
    interest: Interest,
    comments?: Comment[]
}