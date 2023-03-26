import Router from 'express';
import { UserUseCase } from '../../application/userUseCase';
import { UserController } from '../../infrastructure/controller/userController';
import { UserRepository } from '../../domain/userRepository';
import { seqRepository } from '../repository/seqRepository';


export const userRouter = Router();

const userRepo = new seqRepository();

const userUseCase = new UserUseCase(userRepo);

const userContr = new UserController(userUseCase);


userRouter.route('/users')
        .get(userContr.getAllUser)
        .post()

userRouter.route('/users/:id')
        .get()
        .put()
        .delete()
