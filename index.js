"use strict";
exports.__esModule = true;
exports.hasArabic = exports.fromArabic = exports.toArabic = void 0;
var engishDigits = /[0-9]/g;
var arabicDigits = /[٠-٩]/g;
var notEngishDigits = /[^0-9]/g;
var notArabicDigits = /[^٠-٩]/g;
var gap = 1584; // charcode gap between 0 and ٠;
/**
 *
 * @param num number or a string that contain the number to be converted
 * @param intOnly remove any character that is not a digit
 */
exports.toArabic = function (num, intOnly) {
    if (intOnly === void 0) { intOnly = false; }
    if (intOnly) {
        num = String(num).replace(notEngishDigits, "");
    }
    return String(num)
        .replace(engishDigits, function (match) { return String.fromCharCode(match.charCodeAt(0) + gap); });
};
/**
 *
 * @param num a string that contain the number to be converted
 * @param intOnly remove any character that is not a digit
 */
exports.fromArabic = function (num, intOnly) {
    if (intOnly === void 0) { intOnly = false; }
    if (intOnly) {
        num = String(num).replace(notArabicDigits, "");
    }
    return String(num)
        .replace(arabicDigits, function (match) { return String.fromCharCode(match.charCodeAt(0) - gap); });
};
/**
 *
 * @param num a string that contain the number to be tested
 */
exports.hasArabic = function (num) {
    return String(num).match(arabicDigits);
};
