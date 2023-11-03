import express, { Application, Request, Response } from 'express';
import interestController from './controllers/interest.controller';
import userController from './controllers/user.controller';

const app: Application = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.static('/public'))

app.use('/user', userController )
app.use('/interest', interestController)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript and Prisma!');
});

app.listen(port, ()=>{
  console.log('si jala en el puerto ' + port)
})