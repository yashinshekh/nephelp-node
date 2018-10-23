'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('./api/user');

var _user2 = _interopRequireDefault(_user);

var _profile = require('./api/profile');

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeSchema = function routeSchema(app) {
    app.use('/api/user', _user2.default);
    app.use('/api/profile', _profile2.default);
};

exports.default = routeSchema;
//# sourceMappingURL=index.js.map