import {Schema} from 'mongoose';
import mongoose from 'mongoose';

const UserSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        default:true
    }
});

export default mongoose.model('users',UserSchema);