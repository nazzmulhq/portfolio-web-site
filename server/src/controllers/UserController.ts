import { Request, Response } from 'express';
import User from '../models/User';

export default class UserController {
    static getUser = async (req: Request, res: Response) => {
        return res.status(200).json(
            await User.findAll({
                attributes: ['id', 'email', 'name', 'username']
            })
        );
    };

    static createUser = async (req: Request, res: Response) => {
        const user = await User.create(req.body);
        return res.status(200).json(user);
    };
}
