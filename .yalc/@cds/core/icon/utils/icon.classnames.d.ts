import { CdsIcon } from '../icon.element.js';
export declare const enum SizeUpdateStrategies {
    BadSizeValue = "bad-value",
    ValidSizeString = "value-is-string",
    ValidNumericString = "value-is-numeric",
    NilSizeValue = "value-is-nil"
}
export declare function getUpdateSizeStrategy(size: string): SizeUpdateStrategies;
export declare function getSizeValue(size: string): string;
export declare function updateIconSizeStyle(el: CdsIcon, size: string): void;
