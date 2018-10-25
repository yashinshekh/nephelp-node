import user from './api/user';
import profile from './api/profile';
import email from './api/email';

const routeSchema = (app) => {
    app.use('/api/user',user);
    app.use('/api/profile',profile);
    app.use('/api/sendemail',email);
};

export default routeSchema;