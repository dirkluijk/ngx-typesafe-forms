import { AbstractControl } from '@angular/forms';
import { Observable, defer, merge, of } from 'rxjs';

export function formControlValue$<T>(formControl: AbstractControl): Observable<T> {
  return merge(
    defer(() => of(formControl.value)),
    formControl.valueChanges
  );
}
