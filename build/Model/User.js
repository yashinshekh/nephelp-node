'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        default: true
    }
});

exports.default = _mongoose2.default.model('users', UserSchema);
//# sourceMappingURL=User.js.map