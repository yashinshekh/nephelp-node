import userRoute from './api/userRoute';

const routeSchema = (app) => {
    app.use('/api/user',userRoute);
};

export default routeSchema;