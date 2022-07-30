import { Request, Response } from 'express';
import Skill from '../models/Skill';
import User from '../models/User';

export default class SkillController {
    static getAllSkill = async (req: Request, res: Response) => {
        try {
            return res.status(200).json(await Skill.findAll());
        } catch (e) {
            return res.status(400).json({
                message: 'Error',
                details: e
            });
        }
    };

    static createSkill = async (req: Request, res: Response) => {
        try {
            const skill = await Skill.create(req.body, {
                include: [
                    {
                        model: User,
                        attributes: ['userId']
                    }
                ]
            });
            return res.status(201).json(skill);
        } catch (e) {
            return res.status(400).json({
                message: 'Error',
                details: e
            });
        }
    };
}
