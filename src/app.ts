import express, { Application, Request, Response } from 'express';
import interestController from './controllers/interest.controller';
import userController from './controllers/user.controller';
import loginController from './controllers/login.controller';
import mapController from './controllers/map.controller';

const app: Application = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.static('public'))

app.use('/user', userController )
app.use('/interest', interestController)
app.use('/login', loginController)
app.use('/maps', mapController)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript and Prisma!');
});

app.listen(port, ()=>{
  console.log('si jala en el puerto ' + port)
})