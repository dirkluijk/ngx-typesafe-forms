import {
  FormArray as AngularFormArray,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

import { AbstractControl } from './abstract-control';
import { formControlValue$ } from './streams/abstract-control-value.stream';
import { formControlError$ } from './streams/abstract-control-error.stream';
import { formControlEnabled$ } from './streams/abstract-control-enabled.stream';
import { formControlPristine$ } from './streams/abstract-control-pristine.stream';
import { formControlValid$ } from './streams/abstract-control-valid.stream';
import { formControlStatus$ } from './streams/abstract-control-status.stream';
import { abstractControlDisabled$ } from './streams/abstract-control-disabled.stream';
import { abstractControlDirty$ } from './streams/abstract-control-dirty.stream';
import { formControlInvalid$ } from './streams/abstract-control-invalid.stream';
import { setDisabled, setEnabled } from './internals/toggle-control';
import { FormStatus } from './internals/form-status';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from './validation';

/**
 * Provides a type safe FormControl class which accepts a generic type T.
 */
export class FormArray<T> extends AngularFormArray implements AbstractControl<T[]> {
  public value!: T[];
  public valueChanges!: Observable<T[]>;

  public validator!: ValidatorFn<T[]> | null;
  public asyncValidator!: AsyncValidatorFn<T[]> | null;

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

  public get value$(): Observable<T[]> {
    return formControlValue$(this);
  }

  public get error$(): Observable<ValidationErrors | null> {
    return formControlError$(this);
  }

  public get enabled$(): Observable<boolean> {
    return formControlEnabled$(this);
  }

  public get pristine$(): Observable<boolean> {
    return formControlPristine$(this);
  }

  public get valid$(): Observable<boolean> {
    return formControlValid$(this);
  }

  public get status$(): Observable<FormStatus> {
    return formControlStatus$(this);
  }

  public get disabled$(): Observable<boolean> {
    return abstractControlDisabled$(this);
  }

  public get dirty$(): Observable<boolean> {
    return abstractControlDirty$(this);
  }

  public get invalid$(): Observable<boolean> {
    return formControlInvalid$(this);
  }

  public setEnabled(enabled: boolean = true): void {
    setEnabled(this, enabled);
  }

  public setDisabled(disabled: boolean = true): void {
    setDisabled(this, disabled);
  }
}
