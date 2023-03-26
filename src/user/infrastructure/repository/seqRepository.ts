import { UserEntity } from "../../domain/userEntity";
import { UserRepository } from "../../domain/userRepository";
import { UserModel } from "../model/userModel";
import { UserValue } from '../../domain/userValues';

export class seqRepository implements UserRepository {
async getAll(): Promise<any> {
    const user = await UserModel.findAll();
    return user;
}

async getById(uuid: string): Promise<any> {
    const user = await UserModel.findByPk(uuid);
    return user;
}

async create(userIn: UserEntity): Promise<any> {
    const user = await UserModel.create({userIn});
    return user;
}

// async updateById(userIn: UserEntity): Promise<any> {
//     const user = await UserModel.update({userIn})
// }

// async deleteById

}