import { ValidationErrors } from '@angular/forms';

import { ControlValueAccessor } from './control-value-accessor';
import { AbstractControl } from './abstract-control';

/**
 * A default ControlValueAccessor implementation
 */
export abstract class DefaultControlValueAccessor<T> implements ControlValueAccessor<T> {
  public abstract readonly control: AbstractControl<T | null>;

  public writeValue(value: T | null): void {
    this.control.setValue(value, { emitEvent: false });
  }

  public registerOnChange(onChange: (value: T | null) => void): void {
    this.control.valueChanges.subscribe(onChange);
  }

  public registerOnTouched(): void {}

  public setDisabledState(disabled: boolean): void {
    disabled ? this.control.disable() : this.control.enable();
  }

  public validate(): ValidationErrors | null {
    return this.control.invalid ? { invalid: true } : null;
  }
}
