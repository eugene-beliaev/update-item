"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
function update(array, predicate, reducer) {
    return array.map(function (el) {
        if (predicate(el)) {
            if (!Array.isArray(el) && typeof el === 'object') {
                return __assign(__assign({}, el), reducer(el));
            }
            return reducer(el);
        }
        return el;
    });
}
exports.update = update;
