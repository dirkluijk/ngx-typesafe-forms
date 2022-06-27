import {
  AbstractControl,
  FormControlStatus,
  FormGroup as AngularFormGroup,
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
  formControlPristine$, formControlRawValue$,
  formControlStatus$,
  formControlValid$,
  formControlValue$
} from './streams';
import { RawValue, setDisabled, setEnabled, TypedOrUntyped, Value } from './internals';
import { AsyncValidatorFn, ValidatorFn } from './validation';

export type FormGroupRawValue<T extends { [K in keyof T]?: AbstractControl }> =
  TypedOrUntyped<T, { [K in keyof T]: RawValue<T[K]> }, { [key: string]: any }>;

export type FormGroupValue<T extends { [K in keyof T]?: AbstractControl }> =
  TypedOrUntyped<T, Partial<{ [K in keyof T]: Value<T[K]> }>, { [key: string]: any }>;

export class FormGroup<TControl extends { [K in keyof TControl]: AbstractControl } = any> extends AngularFormGroup<TControl> {

  public readonly value$: Observable<FormGroupValue<TControl>> = formControlValue$(this);

  public readonly rawValue$: Observable<FormGroupRawValue<TControl>> = formControlRawValue$(this);

  public readonly errors$: Observable<ValidationErrors | null> = formControlErrors$(this);

  public readonly enabled$: Observable<boolean> = formControlEnabled$(this);

  public readonly pristine$: Observable<boolean> = formControlPristine$(this);

  public readonly valid$: Observable<boolean> = formControlValid$(this);

  public readonly status$: Observable<FormControlStatus> = formControlStatus$(this);

  public readonly disabled$: Observable<boolean> = abstractControlDisabled$(this);

  public readonly dirty$: Observable<boolean> = abstractControlDirty$(this);

  public readonly invalid$: Observable<boolean> = formControlInvalid$(this);

  public readonly validValue$: Observable<FormGroupValue<TControl>> = this.value$.pipe(filter(() => this.valid));

  public setValidators(newValidator: ValidatorFn<FormGroupValue<TControl>> | ValidatorFn<FormGroupValue<TControl>>[] | null): void {
    super.setValidators(newValidator);
  }

  public setAsyncValidators(
    newValidator: AsyncValidatorFn<FormGroupValue<TControl>> | AsyncValidatorFn<FormGroupValue<TControl>>[] | null
  ): void {
    super.setAsyncValidators(newValidator);
  }

  public setEnabled(enabled: boolean = true): void {
    setEnabled(this, enabled);
  }

  public setDisabled(disabled: boolean = true): void {
    setDisabled(this, disabled);
  }
}

export class FormRecord<TControl extends AbstractControl<Value<TControl>, RawValue<TControl>> = AbstractControl>
  extends FormGroup<{ [key: string]: TControl }> {}
