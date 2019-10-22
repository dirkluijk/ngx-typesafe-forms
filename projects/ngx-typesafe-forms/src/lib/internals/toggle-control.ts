import { AbstractControl } from '@angular/forms';

export function setEnabled(control: AbstractControl, enabled: boolean = true): void {
  if (enabled) {
    control.enable();
  } else {
    control.disable();
  }
}

export function setDisabled(control: AbstractControl, disabled: boolean = true): void {
  setEnabled(control, !disabled);
}
