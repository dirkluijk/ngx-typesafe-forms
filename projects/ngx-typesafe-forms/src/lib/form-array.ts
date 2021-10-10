import {
  FormArray as AngularFormArray,
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
import { FormControl } from './form-control';

/**
 * Provides a type safe FormControl class which accepts a generic type T.
 */
export class FormArray<T> extends AngularFormArray implements AbstractControl<T[]> {
  public value!: T[];
  public valueChanges!: Observable<T[]>;

  public readonly value$: Observable<T[]> = formControlValue$(this);

  public readonly errors$: Observable<ValidationErrors | null> = formControlErrors$(this);

  public readonly enabled$: Observable<boolean> = formControlEnabled$(this);

  public readonly pristine$: Observable<boolean> = formControlPristine$(this);

  public readonly valid$: Observable<boolean> = formControlValid$(this);

  public readonly status$: Observable<FormStatus> = formControlStatus$(this);

  public readonly disabled$: Observable<boolean> = abstractControlDisabled$(this);

  public readonly dirty$: Observable<boolean> = abstractControlDirty$(this);

  public readonly invalid$: Observable<boolean> = formControlInvalid$(this);

  public readonly validValue$: Observable<T[]> = this.value$.pipe(filter(() => this.valid));

  constructor(
    public controls: AbstractControl<T>[],
    validatorOrOpts?: ValidatorFn<T[]> | ValidatorFn<T[]>[] | AbstractControlOptions<T[]> | null,
    asyncValidator?: AsyncValidatorFn<T> | AsyncValidatorFn<T>[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }

  public setValidators(newValidator: ValidatorFn<T[]> | ValidatorFn<T[]>[] | null): void {
    super.setValidators(newValidator);
  }

  public setAsyncValidators(newValidator: AsyncValidatorFn<T[]> | AsyncValidatorFn<T[]>[] | null): void {
    super.setAsyncValidators(newValidator);
  }

  public at(index: number): AbstractControl<T> {
    return super.at(index);
  }

  public controlAt(index: number): FormControl<T> {
    const control = this.at(index);

    if (!(control instanceof FormControl)) {
      throw Error(`Abstract control with index ${index} is not a FormControl.`);
    }

    return control;
  }

  public push(control: AbstractControl<T>): void {
    return super.push(control);
  }

  public insert(index: number, control: AbstractControl<T>): void {
    return super.insert(index, control);
  }

  public setControl(index: number, control: AbstractControl<T>): void {
    return super.setControl(index, control);
  }

  public setValue(value: T[], options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    return super.setValue(value, options);
  }

  public patchValue(value: T[], options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    return super.patchValue(value, options);
  }

  public reset(value?: T[], options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    return super.reset(value, options);
  }

  public getRawValue(): T[] {
    return super.getRawValue();
  }

  public setEnabled(enabled: boolean = true): void {
    setEnabled(this, enabled);
  }

  public setDisabled(disabled: boolean = true): void {
    setDisabled(this, disabled);
  }
}
