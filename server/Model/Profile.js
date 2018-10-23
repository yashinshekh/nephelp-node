import {Schema} from 'mongoose';
import mongoose from 'mongoose';

const ProfileSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        required: true
    },
    nationality:{
        type:String,
        required: true
    },
    passportno:{
        type:String,
        required:true
    }
});

export default mongoose.model('profile',ProfileSchema);