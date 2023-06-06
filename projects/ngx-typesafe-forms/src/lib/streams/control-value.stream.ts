import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable, defer, merge, of } from 'rxjs';

export type ControlsFor<T> = {
  [K in keyof T]: AbstractControl<unknown>;
};

export function formControlValue$<TValue, CONTROL extends FormControl<TValue>>(
  formControl: FormControl<TValue>
): Observable<CONTROL['value']> {
  return merge(
    defer(() => of(formControl.value)),
    formControl.valueChanges
  );
}

export function formGroupValue$<TValue extends ControlsFor<TValue>, GROUP extends FormGroup<TValue>>(
  formGroup: FormGroup<TValue>
): Observable<GROUP['value']> {
  return merge(
    defer(() => of(formGroup.value)),
    formGroup.valueChanges
  );
}

export function formArrayValue$<TControl extends AbstractControl, ARRAY extends FormArray<TControl>>(
  formArray: FormArray<TControl>
): Observable<ARRAY['value']> {
  return merge(
    defer(() => of(formArray.value)),
    formArray.valueChanges
  );
}
