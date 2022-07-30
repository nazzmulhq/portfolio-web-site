import ProfileRoute from 'routes/ProfileRoute';
import userRoute from '../routes/UserRoute';
import SkillRoute from '../routes/SkillRoute';

export type RouterT = typeof userRoute | typeof ProfileRoute | typeof SkillRoute;
