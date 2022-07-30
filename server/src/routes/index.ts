import { RouterT } from '../types';
import ProfileRoute from './ProfileRoute';
import UserRoute from './UserRoute';
import SkillRoute from './SkillRoute';

const routers: RouterT[] = [UserRoute, ProfileRoute, SkillRoute];

export default routers;
