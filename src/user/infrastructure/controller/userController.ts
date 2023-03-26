import {Request, Response} from 'express'
import { UserUseCase } from '../../application/userUseCase';

export class UserController {
    
    constructor(private userUseCase: UserUseCase) {
        this.getAllUser = this.getAllUser.bind(this);
    }

    public async getAllUser(req: Request, res: Response) {
        const user = await this.userUseCase.getAll();
        res.status(200).json(user);
    }

    public async create({body}: Request, res: Response) {

        const user = await this.userUseCase.create(body);

        return res.send({user});

    }

}