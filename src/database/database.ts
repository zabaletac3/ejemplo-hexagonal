import {Sequelize} from 'sequelize';

export const db = new Sequelize('types', 'root', 'Zabaleta3*#', {
    host: 'localhost',
    dialect: 'mysql',
});