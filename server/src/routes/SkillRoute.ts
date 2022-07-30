import { Router } from 'express';
import SkillController from '../controllers/SkillController';

class SkillRoute {
    path = '/skill';

    router = Router();

    constructor() {
        this.init();
    }

    private init = () => {
        this.router
            .get(`${this.path}s`, SkillController.getAllSkill)
            .post(this.path, SkillController.createSkill);
    };
}

export default new SkillRoute();
