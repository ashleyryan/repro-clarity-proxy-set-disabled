export declare function arrayToObject(arr: any[], key: string): any;
export declare function arrayTail<T>(arr: T[]): T | undefined;
export declare function arrayHead<T>(arr: T[]): T | undefined;
export declare function previousInArray<T>(current: T, arr: T[]): T | undefined;
export declare function nextInArray<T>(current: T, arr: T[]): T | undefined;
export declare function arrayRemoveFirstInstance<T>(val: T, arr: T[]): T[];
export declare function arrayRemoveLastInstance<T>(val: T, arr: T[]): T[];
export declare function arrayRemoveAllInstances<T>(val: T | T[], arr: T[]): T[];
