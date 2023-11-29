export default interface UserDtoUpdate {
    id: number,
    username: string,
    email: string,
    description?: string,
    profilePic?: string,
}