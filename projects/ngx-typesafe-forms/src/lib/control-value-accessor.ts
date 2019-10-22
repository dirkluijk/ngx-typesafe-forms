import { ControlValueAccessor as AngularControlValueAccessor } from '@angular/forms';

/**
 * Provides a type safe ControlValueAccessor interface which accepts a generic type T.
 */
export interface ControlValueAccessor<T> extends AngularControlValueAccessor {
  writeValue(value: T | null): void;
  registerOnChange(onChange: (value: T | null) => void): void;
}
