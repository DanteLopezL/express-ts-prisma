import { Router } from "express";
import { getAllInterests, getInterestById, } from "../services/interest.service";

const interestController = Router()

//interestController.post('/new' , createInterest)
interestController.get('/all' , getAllInterests)
interestController.get('/:id', getInterestById)
//interestController.put('/update/:id', updateInterest)
//interestController.delete('/delete/:id', deleteInterest)

export default interestController