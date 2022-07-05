import { Router } from 'express';
import ProfileController from '../controllers/ProfileController';

class ProfileRoute {
    private path = '/profile';
    public router = Router();

    constructor() {
        this.init();
    }

    private init = () => {
        this.router
            .get(this.path, ProfileController.getProfile)
            .post(this.path, ProfileController.createProfile);
    };
}

export default new ProfileRoute();
