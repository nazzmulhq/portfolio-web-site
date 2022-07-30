import { Router } from 'express';
import ProfileController from '../controllers/ProfileController';

class ProfileRoute {
    public router = Router();

    private path = '/profile';

    constructor() {
        this.init();
    }

    private init = () => {
        this.router
            .get(this.path, ProfileController.getProfile)
            .post(this.path, ProfileController.createProfile)
            .put(this.path, ProfileController.updateProfile);
    };
}

export default new ProfileRoute();
