import mongoose from 'mongoose';

const MONGO_URI = "mongodb://root:qazwsxedcrfv2@ds137703.mlab.com:37703/nephelp";

const connectMongoose = () => {
    mongoose.connect(MONGO_URI,{useNewUrlParser:true})
        .then(() => console.log("MongoDB connected!!"))
        .catch(err => console.log(err))
};

export default connectMongoose;