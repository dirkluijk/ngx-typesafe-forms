import {
  AbstractControl,
  FormArray as AngularFormArray, FormControlStatus,
  ValidationErrors
} from '@angular/forms';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import {
  abstractControlDirty$,
  abstractControlDisabled$, formArrayValue$,
  formControlEnabled$,
  formControlErrors$,
  formControlInvalid$,
  formControlPristine$,
  formControlRawValue$,
  formControlStatus$,
  formControlValid$,
} from './streams';
import { RawValue, setDisabled, setEnabled, TypedOrUntyped, Value } from './internals';
import { AsyncValidatorFn, ValidatorFn } from './validation';

export type FormArrayValue<T extends AbstractControl> =
  TypedOrUntyped<T, Value<T>[], any[]>;

export type FormArrayRawValue<T extends AbstractControl> =
  TypedOrUntyped<T, RawValue<T>[], any[]>;

export class FormArray<TControl extends AbstractControl> extends AngularFormArray<TControl> {
  public readonly value$: Observable<FormArrayValue<TControl>> = formArrayValue$(this);

  public readonly rawValue$: Observable<FormArrayRawValue<TControl>> = formControlRawValue$(this);

  public readonly errors$: Observable<ValidationErrors | null> = formControlErrors$(this);

  public readonly enabled$: Observable<boolean> = formControlEnabled$(this);

  public readonly pristine$: Observable<boolean> = formControlPristine$(this);

  public readonly valid$: Observable<boolean> = formControlValid$(this);

  public readonly status$: Observable<FormControlStatus> = formControlStatus$(this);

  public readonly disabled$: Observable<boolean> = abstractControlDisabled$(this);

  public readonly dirty$: Observable<boolean> = abstractControlDirty$(this);

  public readonly invalid$: Observable<boolean> = formControlInvalid$(this);

  public readonly validValue$: Observable<FormArrayValue<TControl>> = this.value$.pipe(filter(() => this.valid));

  public setValidators(newValidator: ValidatorFn<FormArrayValue<TControl>> | ValidatorFn<FormArrayValue<TControl>>[] | null): void {
    super.setValidators(newValidator);
  }

  public setAsyncValidators(
    newValidator: AsyncValidatorFn<FormArrayValue<TControl>> | AsyncValidatorFn<FormArrayValue<TControl>>[] | null
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
