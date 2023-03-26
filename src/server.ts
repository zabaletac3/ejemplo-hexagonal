import "dotenv/config";
import express from "express";
import cors from "express";
import morgan from 'morgan';

import { db } from "./database/database";
import {appRouter} from './routes/index';
// import { UserModel } from "./user/infrastructure/model/userModel";
const {UserModel } = require('./user/infrastructure/model/userModel');

export class Server {
    
    public app: express.Application = express();
    private port: number = 4000;

    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(morgan('dev'));
        this.app.use(cors());

        this.dataBaseConnection();

        // this.listen();

        this.routes();
    }

    async dataBaseConnection() {
        try {

            await db.sync({ force: true});

            await db.authenticate();
            console.log('Conexión establecida');

        } catch (error) {
            console.error('El error es: ', error)
        }
    }

    public routes() {
        this.app.use('/api', appRouter);
    }

    public listen() {
        try {
            this.app.listen(this.port, () => {
                console.log(`server running on port ${this.port}`);
            })
        } catch (error) {
            console.log(error);
        }
    }


}

new Server();