import { AbstractControl } from '@angular/forms';
import { Observable, defer, merge, of } from 'rxjs';

export function formControlValue$<TValue>(formControl: AbstractControl<TValue>): Observable<TValue> {
  return merge(
    defer(() => of(formControl.value)),
    formControl.valueChanges
  );
}
