/*
 * jClass Object Oriented Programming Library
 * https://github.com/mr-fly/jClass
 *
 * Copyright (c) Mr. Fly
 * Licensed under MIT license (https://github.com/mr-fly/jClass/blob/master/LICENSE)
 */

(function (context) {

    var Class = function () {
        var self = this;

        self.constructor && self.constructor.call(self, arguments);

        return self;
    };

    Class.extend = function () {
        console.log('extend');
    };

    Class.clone = function () {
        console.log('clone');
    };

    Class.prototype.extend = Class.extend;

    Class.prototype.clone = Class.extend;

    Class.prototype.toString = function () {
        return null;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Class;
    } else {
        context.Class = Class;
    }

})(this);