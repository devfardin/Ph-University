import express, { Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/user/user.router';
import globarErrorHandler from './app/middlwares/globalErrorHandler';
import notFound from './app/middlwares/notFound';
import router from './app/routes';
const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/v1', router);

// Global Error Handler
app.use(globarErrorHandler)

// not found route
app.use(notFound);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
