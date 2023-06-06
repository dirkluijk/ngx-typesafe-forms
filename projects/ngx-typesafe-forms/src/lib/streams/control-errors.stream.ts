import { AbstractControl, ValidationErrors } from '@angular/forms';
import { defer, merge, of, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export function formControlErrors$(formControl: AbstractControl): Observable<ValidationErrors | null> {
  return merge(
    defer(() => of(formControl.errors)),
    formControl.valueChanges.pipe(
      map(() => formControl.errors),
      distinctUntilChanged()
    )
  );
}
