import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export function mapToOpposite(): OperatorFunction<boolean, boolean> {
  return (source$) => {
    return source$.pipe(
      map((b) => !b)
    );
  };
}
