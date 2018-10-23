"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MONGO_URI = "mongodb://root:qazwsxedcrfv2@ds137703.mlab.com:37703/nephelp";

var connectMongoose = function connectMongoose() {
    _mongoose2.default.connect(MONGO_URI, { useNewUrlParser: true }).then(function () {
        return console.log("MongoDB connected!!");
    }).catch(function (err) {
        return console.log(err);
    });
};

exports.default = connectMongoose;
//# sourceMappingURL=mongoose.js.map