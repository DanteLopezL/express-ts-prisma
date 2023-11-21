import { Request, Response, Router } from "express";
import { getAllInterests, getInterestById, } from "../services/interest.service";
import { Interest } from "../models/interest";
import { tryCreateInterests, tryCreateInterest } from "../services/interest.service";

const interestController = Router()

interestController.get('/all' , getAllInterests)
interestController.get('/:id', getInterestById)
interestController.post('/CreateAll', async (req: Request, res: Response) => {
    const interests: Interest[] = req.body

    if (interests != undefined) {
        if (! await tryCreateInterests(interests)) {
            return res.status(400).json({ message: 'One or some interests were given badly or is repeated!' })
        }

        return res.status(200).json({ message: 'Interests successfully created!', interests })
    }

    return res.status(400).json({ message: 'No data given!' })
})

interestController.post('/Create', async (req: Request, res: Response) => {
    const interest: Interest = req.body

    if (interest != undefined) {
        if (! await tryCreateInterest(interest)) {
            return res.status(400).json({ message: 'Interest given badly or is repeated!' })
        }

        return res.status(200).json({ message: 'Interest successfully created!', interest })
    }

    return res.status(400).json({ message: 'No data given!' })
})
//interestController.delete('/delete/:id', deleteInterest)

export default interestController