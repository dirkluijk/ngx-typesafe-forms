import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { mapToOpposite } from '../internals';

import { formControlEnabled$ } from './abstract-control-enabled.stream';

export function abstractControlDisabled$(formControl: AbstractControl): Observable<boolean> {
  return formControlEnabled$(formControl).pipe(mapToOpposite());
}
