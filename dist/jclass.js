/*
 * jClass Object Oriented Programming Library
 * https://github.com/mr-fly/jClass
 *
 * Copyright (c) Mr. Fly
 * Licensed under MIT license (https://github.com/mr-fly/jClass/blob/master/LICENSE)
 */

(function (context) {

    var jClass = function () {

    };

    jClass.extend = function () {
        console.log('extend');
    };

    jClass.prototype.extend = jClass.extend;

    jClass.prototype.toString = function () {
        return 'toString';
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = jClass;
    } else {
        context.jClass = jClass;
    }

})(this);