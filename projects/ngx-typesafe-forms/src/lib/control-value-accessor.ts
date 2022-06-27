import { ControlValueAccessor as AngularControlValueAccessor } from '@angular/forms';

/**
 * Provides a type safe ControlValueAccessor interface which accepts a generic type T.
 */
export interface ControlValueAccessor<TValue> extends AngularControlValueAccessor {
  writeValue(value: TValue): void;
  registerOnChange(onChange: (value: TValue) => void): void;
}
