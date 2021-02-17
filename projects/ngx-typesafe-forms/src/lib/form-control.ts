import {
  FormControl as AngularFormControl,
  ValidationErrors
} from '@angular/forms';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import {
  abstractControlDirty$,
  abstractControlDisabled$,
  formControlEnabled$,
  formControlErrors$,
  formControlInvalid$,
  formControlPristine$,
  formControlStatus$,
  formControlValid$,
  formControlValue$
} from './streams';
import { setDisabled, setEnabled, FormStatus } from './internals';
import { AbstractControl } from './abstract-control';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from './validation';

/**
 * Provides a type safe FormControl class which accepts a generic type T.
 */
export class FormControl<T> extends AngularFormControl implements AbstractControl<T> {
  public value!: T;
  public valueChanges!: Observable<T>;

  constructor(
    formState?: T,
    validatorOrOpts?: ValidatorFn<T> | ValidatorFn<T>[] | AbstractControlOptions<T> | null,
    asyncValidator?: AsyncValidatorFn<T> | AsyncValidatorFn<T>[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }

  public setValidators(newValidator: ValidatorFn<T> | ValidatorFn<T>[] | null): void {
    super.setValidators(newValidator);
  }

  public setAsyncValidators(newValidator: AsyncValidatorFn<T> | AsyncValidatorFn<T>[] | null): void {
    super.setAsyncValidators(newValidator);
  }

  public setValue(
    value: T,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ): void {
    super.setValue(value, options);
  }

  public patchValue(
    value: Partial<T>,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ): void {
    super.patchValue(value, options);
  }

  public reset(formState?: T, options?: {onlySelf?: boolean; emitEvent?: boolean }): void {
    super.reset(formState, options);
  }

  public readonly value$: Observable<T> = formControlValue$(this);

  public readonly errors$: Observable<ValidationErrors | null> = formControlErrors$(this);

  public readonly enabled$: Observable<boolean> = formControlEnabled$(this);

  public readonly pristine$: Observable<boolean> = formControlPristine$(this);

  public readonly valid$: Observable<boolean> = formControlValid$(this);

  public readonly status$: Observable<FormStatus> = formControlStatus$(this);

  public readonly disabled$: Observable<boolean> = abstractControlDisabled$(this);

  public readonly dirty$: Observable<boolean> = abstractControlDirty$(this);

  public readonly invalid$: Observable<boolean> = formControlInvalid$(this);

  public readonly validValue$: Observable<T> = this.value$.pipe(filter(() => this.valid));

  public setEnabled(enabled: boolean = true): void {
    setEnabled(this, enabled);
  }

  public setDisabled(disabled: boolean = true): void {
    setDisabled(this, disabled);
  }
}
