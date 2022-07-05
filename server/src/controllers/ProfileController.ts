import { Request, Response } from 'express';
import Profile from '../models/Profile';
import User from '../models/User';

export default class ProfileController {
    static getProfile = async (req: Request, res: Response) => {
        const profile = await Profile.findAll({
            include: [{ model: User }]
        });
        return res.status(200).json(profile);
    };

    static createProfile = async (req: Request, res: Response) => {
        const profile = await Profile.create(req.body, {
            include: [{ model: User, attributes: ['profileId'] }]
        });
        return res.status(201).json(profile);
    };
}
