import { AbstractControl, FormControlStatus } from '@angular/forms';
import { defer, merge, of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function formControlStatus$(formControl: AbstractControl): Observable<FormControlStatus> {
  return merge(
    defer(() => of(formControl.status)),
    formControl.statusChanges.pipe(
      map(() => formControl.status)
    )
  );
}
