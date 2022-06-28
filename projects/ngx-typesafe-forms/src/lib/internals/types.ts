import { AbstractControl } from '@angular/forms';

export type IsAny<T, Y, N> = 0 extends (1 & T) ? Y : N;
export type TypedOrUntyped<T, Typed, Untyped> = IsAny<T, Untyped, Typed>;
export type RawValue<T extends AbstractControl | undefined> = T extends AbstractControl<any, any> ?
  (T['setValue'] extends ((v: infer R) => void) ? R : never) :
  never;
export type Value<T extends AbstractControl | undefined> =
  T extends AbstractControl<any, any> ? T['value'] : never;
