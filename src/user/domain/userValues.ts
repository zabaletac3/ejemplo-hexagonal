import { v4 as uuid } from 'uuid';
import { UserEntity } from './userEntity';


export class UserValue implements UserEntity {
    uuid: string;
    name: string;
    apellido: string;
    username: string;
    email: string;
    password: string;

    constructor({name,apellido,username,email,password}: {name: string; apellido: string; username: string; email: string; password: string;
    } ) {
        this.uuid = uuid();
        this.name = name;
        this.apellido = apellido;
        this.username = username;
        this.email = email;
        this.password = password;
    
    }

}

