import {
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
  formControlPristine$,
  formControlStatus$,
  formControlValid$,
  formControlValue$
} from './streams';
import { setDisabled, setEnabled, FormStatus } from './internals';
import { AbstractControl } from './abstract-control';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from './validation';
import { FormControl } from './form-control';

type StringKeys<T> = Extract<keyof T, string>;

/**
 * A type-safe FormGroup class which accepts a generic type T.
 */
export class FormGroup<T> extends AngularFormGroup implements AbstractControl<T> {
  public value!: T;
  public valueChanges!: Observable<T>;

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

  public contains<K extends StringKeys<T>>(controlName: K): this is FormGroup<T & { [X in K]: T[K] }> {
    return super.contains(controlName);
  }

  public getControl<K extends StringKeys<T>>(controlName: K): AbstractControl<T[K]> {
    if (!this.contains(controlName)) {
      throw Error(`Control with name ${controlName} is not present.`);
    }

    return this.controls[controlName];
  }

  public getFormControl<K extends StringKeys<T>>(controlName: K): FormControl<T[K]> {
    const control = this.getControl(controlName);

    if (!(control instanceof FormControl)) {
      throw Error(`Abstract control with name ${controlName} is not a FormControl.`);
    }

    return control;
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

  public setEnabled(enabled: boolean = true): void {
    setEnabled(this, enabled);
  }

  public setDisabled(disabled: boolean = true): void {
    setDisabled(this, disabled);
  }
}
