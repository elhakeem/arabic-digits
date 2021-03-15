const engishDigits = /[0-9]/g;
const arabicDigits = /[٠-٩]/g;
const notEngishDigits = /[^0-9]/g;
const notArabicDigits = /[^٠-٩]/g;
const gap = 1584; // charcode gap between 0 and ٠;

/**
 * 
 * @param num number or a string that contain the number to be converted
 * @param intOnly remove any character that is not a digit
 */
export const toArabic = (
    num: number|string,
    intOnly: boolean = false
): string => {
    if (intOnly) {
        num = String(num).replace(notEngishDigits, "")
    }
    return String(num)
    .replace(
        engishDigits,
        (match:string) => String.fromCharCode( match.charCodeAt(0) + gap )
    )
}

/**
 * 
 * @param num a string that contain the number to be converted
 * @param intOnly remove any character that is not a digit
 */
export const fromArabic = (
    num: string,
    intOnly:boolean = false
): string => {
    if (intOnly) {
        num = String(num).replace(notArabicDigits, "")
    }
    return String(num)
    .replace(
        arabicDigits,
        (match:string) => String.fromCharCode( match.charCodeAt(0) - gap )
    )
}

/**
 * 
 * @param num a string that contain the number to be tested
 */
export const hasArabic = (num: string): RegExpMatchArray => {
    return String(num).match(arabicDigits);
};
