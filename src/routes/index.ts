import Router from 'express';
import { userRouter } from '../user/infrastructure/userRouter/userRouter';

export const appRouter = Router();

appRouter.use(userRouter)

