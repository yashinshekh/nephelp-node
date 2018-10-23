'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _Profile = require('../../Model/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/user/:user_id', function (req, res) {
    var errors = {};

    _Profile2.default.findOne({ 'user': req.params.req.params.user_id }).populate('users').then(function (profile) {
        if (!profile) {
            errors.nonprofile = "There is no profile for this user.";
            res.status(404).json(errors);
        }
        res.json(profile);
    }).catch(function (err) {
        res.status(404).json({ profile: 'There is no profile for this user.' });
    });
});

exports.default = router;
//# sourceMappingURL=profile.js.map