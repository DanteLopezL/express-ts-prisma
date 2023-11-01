import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../services/user.service";
import upload from "../middleware/uploads";

const userController = Router()

userController.post('/new', createUser)
userController.get('/all', getAllUsers)
userController.get('/:id', getUserById)
userController.put('/update/:id', updateUser)
userController.delete('/delete/:id', deleteUser)

export default userController