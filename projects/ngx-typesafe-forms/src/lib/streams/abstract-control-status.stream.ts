import { AbstractControl } from '@angular/forms';
import { defer, merge, of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FormStatus } from '../internals/form-status';

export function formControlStatus$(formControl: AbstractControl): Observable<FormStatus> {
  return merge(
    defer(() => of(formControl.status as FormStatus)),
    formControl.statusChanges.pipe(
      map(() => formControl.status as FormStatus)
    )
  );
}
