import { Request, Response } from 'express';
import Profile from '../models/Profile';
import User from '../models/User';

export default class UserController {
    static getUser = async (req: Request, res: Response) => {
        return res.status(200).json(
            await User.findAll({
                include: [{ model: Profile }]
            })
        );
    };

    static createUser = async (req: Request, res: Response) => {
        const user = await User.create(req.body);
        return res.status(200).json(user);
    };
}
