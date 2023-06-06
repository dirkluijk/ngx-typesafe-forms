import { AbstractControl } from '@angular/forms';
import { defer, merge, of, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export function formControlValid$(formControl: AbstractControl): Observable<boolean> {
  return merge(
    defer(() => of(formControl.valid)),
    formControl.statusChanges.pipe(
      map(() => formControl.valid),
      distinctUntilChanged()
    )
  );
}
