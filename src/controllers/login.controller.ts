import { Router } from "express";
import { loginNow } from "../services/login.service";

const loginController = Router()

loginController.post('', loginNow)

export default loginController