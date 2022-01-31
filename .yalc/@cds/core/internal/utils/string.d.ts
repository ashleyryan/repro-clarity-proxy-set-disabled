export declare function transformToString(delimiter: string, fns: any[], ...args: any[]): string;
export declare function transformToSpacedString(fns: any[], ...args: any[]): string;
export declare function transformToUnspacedString(fns: any[], ...args: any[]): string;
export declare function camelCaseToKebabCase(value: string): string;
export declare function kebabCaseToCamelCase(str: string): string;
export declare function kebabCaseToPascalCase(string: string): string;
/**
 * Take a object map of css properties and if value concatenate string of all computed values
 * Useful for dynamic style tags in lit templates
 */
export declare function setStyles(styles: {
    [key: string]: string;
}): string;
export declare function setPropStyles(styles: {
    [key: string]: string;
}): string;
export declare function capitalizeFirstLetter(string: string): string;
/** Used for Storybook docs to define knob group for css properties */
export declare const cssGroup = "CSS Custom Properties";
/** Used for Storybook docs to define knob group for JavaScript properties */
export declare const propertiesGroup = "Default Properties";
export declare function getNumericValueFromCssSecondsStyleValue(styleValueInSeconds: string): number;
export declare function isPrefixedOrSuffixedBy(str: string, stringFix: string, prefixOrSuffix?: string): boolean;
export declare function isPrefixedBy(str: string, prefix: string): boolean;
export declare function isSuffixedBy(str: string, suffix: string): boolean;
export declare function removePrefixOrSuffix(str: string, stringFix: string, prefixOrSuffix?: string): string;
export declare function removePrefix(str: string, prefix: string): string;
export declare function removeSuffix(str: string, suffix: string): string;
export declare function replaceWord(str: string, wordToReplace: string, replaceWith?: string): string;
export declare function trimExtraWhitespace(str: string): string;
export declare function transformSpacedStringToArray(str: string): string[];
export declare function convertStringPropertyToObjectConfig(property: string, defaultConfig: object, converter?: (property?: string) => object): object;
export declare function pluckValueFromStringUnit(val: string, unit: string): number;
export declare function pluckPixelValue(val: string): number;
