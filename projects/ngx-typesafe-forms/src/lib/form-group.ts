import {
  FormGroup as AngularFormGroup,
  ValidationErrors
} from '@angular/forms';
import { Observable } from 'rxjs';

import { formControlValue$ } from './streams/abstract-control-value.stream';
import { formControlError$ } from './streams/abstract-control-error.stream';
import { formControlValid$ } from './streams/abstract-control-valid.stream';
import { formControlEnabled$ } from './streams/abstract-control-enabled.stream';
import { formControlPristine$ } from './streams/abstract-control-pristine.stream';
import { formControlStatus$ } from './streams/abstract-control-status.stream';
import { abstractControlDisabled$ } from './streams/abstract-control-disabled.stream';
import { abstractControlDirty$ } from './streams/abstract-control-dirty.stream';
import { formControlInvalid$ } from './streams/abstract-control-invalid.stream';
import { setDisabled, setEnabled } from './internals/toggle-control';
import { AbstractControl } from './abstract-control';
import { FormStatus } from './internals/form-status';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from './validation';

type StringKeys<T> = Extract<keyof T, string>;

/**
 * A type-safe FormGroup class which accepts a generic type T.
 */
export class FormGroup<T> extends AngularFormGroup implements AbstractControl<T> {
  public value!: T;
  public valueChanges!: Observable<T>;

  public validator!: ValidatorFn<T> | null;
  public asyncValidator!: AsyncValidatorFn<T> | null;

  constructor(
    public controls: {
      [K in keyof T]: AbstractControl<T[K]>;
    },
    validatorOrOpts?: ValidatorFn<T> | ValidatorFn<T>[] | AbstractControlOptions<T> | null,
    asyncValidator?: AsyncValidatorFn<T> | AsyncValidatorFn<T>[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }

  public setValidators(newValidator: ValidatorFn<T> | ValidatorFn<T>[] | null): void {
    super.setValidators(newValidator);
  }

  public setAsyncValidators(newValidator: AsyncValidatorFn<T> | AsyncValidatorFn<T>[] | null): void {
    super.setAsyncValidators(newValidator);
  }

  public registerControl<K extends StringKeys<T>>(name: K, control: AbstractControl<T[K]>): AbstractControl<T[K]> {
    return super.registerControl(name, control);
  }

  public addControl<K extends StringKeys<T>>(name: K, control: AbstractControl<T[K]>): void {
    return super.addControl(name, control);
  }

  public removeControl<K extends StringKeys<T>>(name: K): void {
    return super.removeControl(name);
  }

  public setControl<K extends StringKeys<T>>(name: K, control: AbstractControl<T[K]>): void {
    return super.setControl(name, control);
  }

  public contains<K extends StringKeys<T>>(controlName: K): this is FormGroup<T & { [X in K]: NonNullable<T[K]> }> {
    return super.contains(controlName);
  }

  public reset(value?: T, options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    return super.reset(value, options);
  }

  public getRawValue(): T {
    return super.getRawValue();
  }

  public setValue(value: T, options?: {onlySelf?: boolean; emitEvent?: boolean }): void {
    return super.setValue(value, options);
  }

  public patchValue(value: Partial<T>, options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    return super.patchValue(value, options);
  }

  public get value$(): Observable<T> {
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
    setDisabled(this, !disabled);
  }
}
