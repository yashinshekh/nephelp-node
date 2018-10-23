import user from './api/user';
import profile from './api/profile';

const routeSchema = (app) => {
    app.use('/api/user',user);
    app.use('/api/profile',profile)
};

export default routeSchema;