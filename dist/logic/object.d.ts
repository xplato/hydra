export declare const omitFields: <T, Fields extends keyof T>(object: T, fields: Fields[]) => Pick<T, Exclude<keyof T, Fields>>;
