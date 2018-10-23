'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateRegister = undefined;

var _isEmpty = require('./isEmpty');

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateRegister = exports.validateRegister = function validateRegister(data) {
    var errors = {};

    data.username = !(0, _isEmpty.isEmpty)(data.username) ? data.username : '';
    data.email = !(0, _isEmpty.isEmpty)(data.email) ? data.email : '';
    data.password = !(0, _isEmpty.isEmpty)(data.password) ? data.password : '';
    data.password2 = !(0, _isEmpty.isEmpty)(data.password2) ? data.password2 : '';

    if (!_validator2.default.isEmail(data.email)) {
        errors.email = 'Enter a valid email';
    }
    if (_validator2.default.isEmpty(data.email)) {
        errors.email = 'Please enter a Email';
    }
    if (_validator2.default.isEmpty(data.password)) {
        errors.password = 'Please enter a password';
    }
    if (!_validator2.default.isLength(data.password, { min: 2, max: 10 })) {
        errors.password = 'Password needs to be 2 to 10 character';
    }
    if (_validator2.default.isEmpty(data.password2)) {
        errors.password2 = 'Please confirm your password';
    }
    if (!_validator2.default.equals(data.password, data.password2)) {
        errors.password2 = 'Password do not match';
    }

    return {
        errors: errors,
        isValid: (0, _isEmpty.isEmpty)(errors)
    };
};
//# sourceMappingURL=register.js.map