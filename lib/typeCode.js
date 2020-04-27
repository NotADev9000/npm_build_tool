"use strict";
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        return "Hello " + name;
    };
    return Greeter;
}());
module.exports = Greeter;
