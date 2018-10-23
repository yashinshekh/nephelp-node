'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _User = require('../../Model/User');

var _User2 = _interopRequireDefault(_User);

var _register = require('../../validaton/register');

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _keys = require('../../config/keys');

var _login = require('../../validaton/login');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post('/register', function (req, res) {
    var _validateRegister = (0, _register.validateRegister)(req.body),
        errors = _validateRegister.errors,
        isValid = _validateRegister.isValid;

    if (!isValid) {
        return res.status(400).json(errors);
    }

    _User2.default.findOne({ email: req.body.email }).then(function (user) {
        if (user) {
            errors.email = 'Email already exists!';
            return res.status(400).json(errors);
        }
        var newUser = new _User2.default({
            email: req.body.email,
            password: req.body.password
        });

        _bcryptjs2.default.genSalt(10, function (err, salt) {
            _bcryptjs2.default.hash(newUser.password, salt, function (err, hash) {
                newUser.password = hash;
                newUser.save().then(function (user) {
                    var payload = { id: user.id, email: user.email };
                    _jsonwebtoken2.default.sign(payload, _keys.SECRET, { expiresIn: 72000 }, function (err, token) {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    });
                }).catch(function (err) {
                    return console.log(err);
                });
            });
        });
    });
});

router.post('/login', function (req, res) {
    var _validateLogin = (0, _login.validateLogin)(req.body),
        errors = _validateLogin.errors,
        isValid = _validateLogin.isValid;

    if (!isValid) {
        return res.status(400).json(errors);
    }

    _User2.default.findOne({ email: req.body.email }).then(function (user) {
        if (!user) {
            errors.email = "Email does not exists!";
            return res.status(400).json(errors);
        }

        _bcryptjs2.default.compare(req.body.password, user.password).then(function (isMatch) {
            if (isMatch) {
                var payload = { id: user.id, email: user.email };
                _jsonwebtoken2.default.sign(payload, _keys.SECRET, { expiresIn: 72000 }, function (err, token) {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                });
            } else {
                errors.password = "Password do not match.";
                return res.status(400).json(errors);
            }
        }).catch(function (err) {
            return console.log(err);
        });
    });
});

exports.default = router;
//# sourceMappingURL=user.js.map