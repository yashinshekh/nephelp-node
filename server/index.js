import express from 'express';
import cors from 'cors';

const app = express();

import routeSchema from "./routes";
import connectMongoose from "./config/mongoose";
import bodyParser from 'body-parser';

connectMongoose();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors);

routeSchema(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
