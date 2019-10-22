import { AbstractControl as AngularAbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { AsyncValidatorFn, ValidatorFn } from './validation';

/**
 * A type-safe AbstractControl class which accepts a generic type T.
 */
export interface AbstractControl<T> extends AngularAbstractControl {
  value: T;
  valueChanges: Observable<T>;

  validator: ValidatorFn<T> | null;
  asyncValidator: AsyncValidatorFn<T> | null;

  setValue(value: T, options?: object): void;
  patchValue(value: Partial<T>, options?: object): void;

  setValidators(newValidator: ValidatorFn<T> | ValidatorFn<T>[] | null): void;
  setAsyncValidators(newValidator: AsyncValidatorFn<T> | AsyncValidatorFn<T>[] | null): void;
}
