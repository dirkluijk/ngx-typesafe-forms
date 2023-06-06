import { AbstractControl } from '@angular/forms';
import { defer, merge, of, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export function formControlEnabled$(formControl: AbstractControl): Observable<boolean> {
  return merge(
    defer(() => of(formControl.enabled)),
    formControl.statusChanges.pipe(
      map(() => formControl.enabled),
      distinctUntilChanged()
    )
  );
}
