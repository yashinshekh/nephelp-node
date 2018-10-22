import {Router} from 'express';
import bcrypt from 'bcryptjs';
import User from '../../Model/User';
import {validateRegister} from "../../validaton/register";
import jwt from 'jsonwebtoken';
import {SECRET} from "../../config/keys";
import {validateLogin} from "../../validaton/login";

const router = Router();

router.post('/register',(req,res) => {
    const {errors, isValid} = validateRegister(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                errors.email = 'Email already exists!';
                return res.status(400).json(errors);
            }
            const newUser = new User({
                email: req.body.email,
                password: req.body.password,
            });

            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = {id:user.id,email:user.email};
                            jwt.sign(payload,SECRET,{expiresIn: 72000},(err,token)=>{
                                res.json({
                                    success:true,
                                    token:`Bearer `+token
                                })
                            })
                        })
                        .catch(err => console.log(err));
                })
            })
        });
});

router.post('/login',(req,res)=>{
    const {errors,isValid} = validateLogin(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }

    User.findOne({email:req.body.email})
        .then(user => {
            if(!user){
                errors.email = "Email does not exists!";
                return res.status(400).json(errors)
            }

            bcrypt.compare(req.body.password,user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = {id:user.id,email:user.email};
                        jwt.sign(payload,SECRET,{expiresIn: 72000},(err,token) => {
                            res.json({
                                success:true,
                                token: `Bearer `+token
                            })
                        })
                    } else {
                        errors.password = "Password do not match.";
                        return res.status(400).json(errors);
                    }
                })
                .catch(err => console.log(err));

        })
});
