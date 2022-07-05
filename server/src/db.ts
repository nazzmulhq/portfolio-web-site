import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME ? process.env.DB_NAME : 'portfolio',
    process.env.DB_USER ? process.env.DB_USER : 'nazmul',
    process.env.DB_PASS ? process.env.DB_PASS : '123456',
    {
        host: 'localhost',
        dialect: 'postgres',
        models: [__dirname + '/models']
    }
);
