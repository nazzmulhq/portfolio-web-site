import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import { RouterT } from './types';
import loader from './utils/loader';

export default class App {
    public app: Application;

    private readonly PORT: number;

    constructor(PORT: number, routers: RouterT[]) {
        this.PORT = PORT;
        this.app = express();
        this.initMiddlewares();
        this.initRouters(routers);
    }

    public listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server listening on port ${this.PORT}`);
        });
    }

    private initMiddlewares() {
        this.app.use(loader());
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private initRouters(routers: RouterT[]) {
        routers.forEach(({ router }) => this.app.use('/', router));
    }
}
