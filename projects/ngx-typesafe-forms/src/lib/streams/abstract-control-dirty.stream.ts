import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { mapToOpposite } from '../internals/map-to-opposite.operator';

import { formControlPristine$ } from './abstract-control-pristine.stream';

export function abstractControlDirty$(formControl: AbstractControl): Observable<boolean> {
  return formControlPristine$(formControl).pipe(mapToOpposite());
}
