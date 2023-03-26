import { DataTypes} from 'sequelize';

import { db } from '../../../database/database';

export const UserModel = db.define('user', {

    uuid: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type:DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
    }, 

});

