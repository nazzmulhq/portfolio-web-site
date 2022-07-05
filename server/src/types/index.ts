import ProfileRoute from 'routes/ProfileRoute';
import userRoute from '../routes/UserRoute';

export type RouterT = typeof userRoute | typeof ProfileRoute;
