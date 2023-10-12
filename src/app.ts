import express, { Application, Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import userController from 'controllers/user.controller';
import interestController from 'controllers/interest.controller';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', userController)
app.use('/interest', interestController)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript and Prisma!');
});