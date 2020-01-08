import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { mapToOpposite } from '../internals';

import { formControlValid$ } from './abstract-control-valid.stream';

export function formControlInvalid$(formControl: AbstractControl): Observable<boolean> {
  return formControlValid$(formControl).pipe(mapToOpposite());
}
