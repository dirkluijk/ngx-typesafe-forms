import { AbstractControl } from '@angular/forms';
import { Observable, defer, merge, of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export function formControlRawValue$<TValue = any, TRawValue extends TValue = TValue>(
  formControl: AbstractControl<TValue, TRawValue>
): Observable<TRawValue> {
  return merge(
    defer(() => of(formControl.getRawValue())),
    merge(formControl.statusChanges, formControl.valueChanges).pipe(
      map(() => formControl.getRawValue()),
      distinctUntilChanged()
    )
  );
}
