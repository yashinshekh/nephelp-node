import connectMongoose from "./config/mongoose";
import bodyParser from 'body-parser';

import express from 'express';
import routeSchema from "./routes";
const app = express();

connectMongoose();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

routeSchema(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
