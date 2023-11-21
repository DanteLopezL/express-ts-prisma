import { Interest } from "models/interest";

export interface UserDtoIn {
    username: string,
    password: string,
    email: string,
    interests: Interest[],
    profilePic?: string
}