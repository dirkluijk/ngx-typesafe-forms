import {
  AbstractControl,
  AbstractControlOptions as AngularAbstractControlOptions,
  ValidationErrors
} from '@angular/forms';
import { Observable } from 'rxjs';

export type ValidatorFn<TValue> = (control: AbstractControl<TValue>) => ValidationErrors | null;
export type AsyncValidatorFn<TValue> = (control: AbstractControl<TValue>) => Promise<ValidationErrors | null> |
  Observable<ValidationErrors | null>;

export interface AbstractControlOptions<TValue> extends AngularAbstractControlOptions {
  validators?: ValidatorFn<TValue> | ValidatorFn<TValue>[] | null;
  asyncValidators?: AsyncValidatorFn<TValue> | AsyncValidatorFn<TValue>[] | null;
}
