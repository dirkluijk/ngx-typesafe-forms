import {
  FormControl as AngularFormControl,
  FormControlState, FormControlStatus,
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
import { setDisabled, setEnabled } from './internals';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from './validation';

export interface FormControlOptions<T> extends AbstractControlOptions<T> {
  nonNullable?: boolean;
  initialValueIsDefault?: boolean;
}

export interface FormControl<TValue = any> extends AngularFormControl<TValue> {
  value$: Observable<TValue>;
  errors$: Observable<ValidationErrors | null>;
  enabled$: Observable<boolean>;
  pristine$: Observable<boolean>;
  valid$: Observable<boolean>;
  status$: Observable<FormControlStatus>;
  disabled$: Observable<boolean>;
  dirty$: Observable<boolean>;
  invalid$: Observable<boolean>;
  validValue$: Observable<TValue>;

  setValidators(newValidator: ValidatorFn<TValue> | ValidatorFn<TValue>[] | null): void;
  setAsyncValidators(newValidator: AsyncValidatorFn<TValue> | AsyncValidatorFn<TValue>[] | null): void;
  setEnabled(enabled: boolean): void;
  setDisabled(disabled: boolean): void;
}

type FormControlInterface<T = any> = FormControl<T>;

// tslint:disable-next-line:class-name
export interface _FormControlCtor {
  prototype: FormControl;

  new(): FormControl;

  new<T = any>(value: FormControlState<T> | T, opts: FormControlOptions<T> & { nonNullable: true }): FormControl<T>;

  new<T = any>(
    value: FormControlState<T | null> | T,
    validatorOrOpts?: ValidatorFn<T | null> | ValidatorFn<T | null>[] | FormControlOptions<T | null> | null,
    asyncValidator?: AsyncValidatorFn<T | null> | AsyncValidatorFn<T | null>[] | null
  ): FormControl<T | null>;
}

export const FormControl: _FormControlCtor =
  // tslint:disable-next-line:no-shadowed-variable
  (class FormControl<TValue> extends AngularFormControl implements FormControlInterface<TValue> {
      public readonly value$: Observable<TValue> = formControlValue$(this);

      public readonly errors$: Observable<ValidationErrors | null> = formControlErrors$(this);

      public readonly enabled$: Observable<boolean> = formControlEnabled$(this);

      public readonly pristine$: Observable<boolean> = formControlPristine$(this);

      public readonly valid$: Observable<boolean> = formControlValid$(this);

      public readonly status$: Observable<FormControlStatus> = formControlStatus$(this);

      public readonly disabled$: Observable<boolean> = abstractControlDisabled$(this);

      public readonly dirty$: Observable<boolean> = abstractControlDirty$(this);

      public readonly invalid$: Observable<boolean> = formControlInvalid$(this);

      public readonly validValue$: Observable<TValue> = this.value$.pipe(filter(() => this.valid));

      public setValidators(newValidator: ValidatorFn<TValue> | ValidatorFn<TValue>[] | null): void {
        super.setValidators(newValidator);
      }

      public setAsyncValidators(newValidator: AsyncValidatorFn<TValue> | AsyncValidatorFn<TValue>[] | null): void {
        super.setAsyncValidators(newValidator);
      }

      public setEnabled(enabled: boolean = true): void {
        setEnabled(this, enabled);
      }

      public setDisabled(disabled: boolean = true): void {
        setDisabled(this, disabled);
      }
    }
  );
