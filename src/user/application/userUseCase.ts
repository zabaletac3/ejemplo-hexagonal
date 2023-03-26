import { UserRepository } from '../domain/userRepository';
import { UserValue } from '../domain/userValues';

export class UserUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    public getAll = async () => {
        const user = await this.userRepository.getAll();
        return user;
    }

    public getById = async (uuid: string) => {
        const user = await this.userRepository.getById(uuid);
        return user;
    }

    public create = async ({name, apellido, username, email, password}: any) => {
        const userValue = new UserValue({name, apellido, username, email, password});
        const userCreated = await this.userRepository.create(userValue);
        return userCreated;
    }

//     public updateById = async (uuid: string) => {
//         const userUpdated = await this.userRepository.updateById(uuid);
//         return userUpdated;
//     }

//     public deleteById = async (uuid: string) => {
//         const userDeleted = await this.userRepository.updateById(uuid);
//         return userDeleted;
// }
}