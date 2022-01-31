export declare function isNil(val: any): boolean;
export declare function isNilOrEmpty(val: any): boolean;
export declare function isString(val: any): boolean;
export declare function isNumericString(val: string): boolean;
export declare function isStringOrNil(val: any): boolean;
export declare function isStringAndNotNilOrEmpty(val: any): boolean;
export declare function isObject(val: any): boolean;
export declare function isMap(val: any): boolean;
export declare function isObjectAndNotNilOrEmpty(val: any): boolean;
export declare function hasPropertyChanged(val: any, oldVal: any): boolean;
export declare function hasStringPropertyChanged(val: string | null | undefined, oldVal: string): boolean;
export declare function hasStringPropertyChangedAndNotNil(val: string | null | undefined, oldVal: string): boolean;
export declare function getEnumValues(enumeration: any): unknown[];
export declare function createId(prefix?: string): string;
export declare function deepClone(obj: any): any;
declare type ObjectPropertyNameAndValueTuples = [string, string] | [string, true] | [string, false] | [string, null] | [string, undefined] | [string, number];
export declare function convertAttributeStringValuesToValue(stringValue: string): string | number | boolean | null | undefined;
export declare function convertStringPropValuePairsToTuple(propValString: string): ObjectPropertyNameAndValueTuples[];
export declare function anyOrAllPropertiesPass(obj: any, propValuePairs: string, anyOrAll: 'any' | 'all'): boolean;
export declare function allPropertiesPass(obj: any, propValuePairs: string): boolean;
export declare function anyPropertiesPass(obj: any, propValuePairs: string): boolean;
/**
 * This function takes an object (e.g. { ohai: 'hello', count: 2 }) or an Element
 * (e.g. <p ohai="hello" count="2">i am an html element</p>).
 *
 * It also takes a string that represents a potential property or attribute on the
 * object or element (e.g. "ohai" or "count").
 *
 * Lastly, it takes a potential value for the potential property or attribute
 * (e.g. "hello" or 2).
 *
 * If the object/element has the string as a property or attribute and the value
 * of the property/attribute equals the expected value, it returns true. If not,
 * it returns false.
 *
 * This code is the brains behind our "key:value" strings found in Clarity Motion.
 * (e.g. { hidden: true, onlyIf: "responsive:false", animation: ...})
 *
 * @export
 * @param {*} objectOrElement
 * @param {string} propertyOrAttributeName
 * @param {(string | number | boolean | null | undefined)} expectedValue
 * @returns {boolean}
 */
export declare function doesPropertyPass(objectOrElement: any, propertyOrAttributeName: string, expectedValue: string | number | boolean | null | undefined): boolean;
export declare function allAre<T>(testFn: (val: T) => boolean, ...itemsToCheck: T[]): boolean;
export declare function allAreDefined<U>(...items: U[]): boolean;
export {};
