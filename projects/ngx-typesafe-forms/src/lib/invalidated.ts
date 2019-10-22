export type Invalidated<T> = null | T extends object ? { [K in keyof T]: null | T } : never;
