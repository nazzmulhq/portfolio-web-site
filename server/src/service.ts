import dotenv from 'dotenv';
import App from './app';
import { sequelize } from './db';
import routers from './routes';

dotenv.config();

const app = new App(3000, routers);

(async () => {
    try {
        await sequelize.sync({ alter: true }).then((result: any) => {
            console.log('Database has been synced');
        });
    } catch (e) {
        console.log('Database not synced');
    }
})();

app.listen();
