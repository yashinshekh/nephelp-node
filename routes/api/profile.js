import {Router} from 'express';
import Profile from "../../Model/Profile";


const router = Router();

router.get('/user/:user_id',(req,res) => {
    const errors = {};

    Profile.findOne({'user':req.params.req.params.user_id})
        .populate('users')
        .then(profile => {
            if(!profile){
                errors.nonprofile = "There is no profile for this user.";
                res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => {
            res.status(404).json({profile:'There is no profile for this user.'})
        })
});

export default router;