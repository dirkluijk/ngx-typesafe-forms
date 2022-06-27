import { AbstractControl, ValidationErrors } from '@angular/forms';

import { ControlValueAccessor } from './control-value-accessor';

/**
 * A default ControlValueAccessor implementation
 */
export abstract class DefaultControlValueAccessor<TValue> implements ControlValueAccessor<TValue> {
  public abstract readonly control: AbstractControl;

  public writeValue(value: TValue): void {
    this.control.setValue(value, { emitEvent: false });
  }

  public registerOnChange(onChange: (value: TValue) => void): void {
    this.control.valueChanges.subscribe(onChange);
  }

  public registerOnTouched(): void {}

  public setDisabledState(disabled: boolean): void {
    disabled ? this.control.disable({ emitEvent: false }) : this.control.enable({ emitEvent: false });
  }

  public validate(): ValidationErrors | null {
    return this.control.invalid ? { invalid: true } : null;
  }
}
