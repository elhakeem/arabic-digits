/**
 *
 * @param num number or a string that contain the number to be converted
 * @param intOnly remove any character that is not a digit
 */
export declare const toArabic: (num: number | string, intOnly?: boolean) => string;
/**
 *
 * @param num a string that contain the number to be converted
 * @param intOnly remove any character that is not a digit
 */
export declare const fromArabic: (num: string, intOnly?: boolean) => string;
/**
 *
 * @param num a string that contain the number to be tested
 */
export declare const hasArabic: (num: string) => RegExpMatchArray;
