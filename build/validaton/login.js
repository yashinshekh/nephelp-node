'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateLogin = undefined;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = require('./isEmpty');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateLogin = exports.validateLogin = function validateLogin(data) {
    var errors = {};

    data.email = !(0, _isEmpty.isEmpty)(data.email) ? data.email : '';
    data.password = !(0, _isEmpty.isEmpty)(data.password) ? data.password : '';

    if (!_validator2.default.isEmail(data.email)) {
        errors.email = 'Enter a valid email';
    }
    if (_validator2.default.isEmpty(data.password)) {
        errors.password = "Enter a password.";
    }

    return {
        errors: errors,
        isValid: (0, _isEmpty.isEmpty)(errors)
    };
};
//# sourceMappingURL=login.js.map