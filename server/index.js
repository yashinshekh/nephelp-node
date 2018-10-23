import express from 'express';

const app = express();

import routeSchema from "./routes";
import connectMongoose from "./config/mongoose";
import bodyParser from 'body-parser';

connectMongoose();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

routeSchema(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
