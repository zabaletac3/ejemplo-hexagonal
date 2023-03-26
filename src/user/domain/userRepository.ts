import { UserEntity } from './userEntity';

export interface UserRepository {
    getAll(): Promise<UserEntity[]>;
    getById(uuid: string): Promise<UserEntity>;
    create(user: UserEntity): Promise<UserEntity>;
    // updateById(uuid: string): Promise<UserEntity>;
    // deleteById(uuid: string): Promise<UserEntity>;
}