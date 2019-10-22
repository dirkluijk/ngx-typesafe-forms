import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BreadcrumbResolver } from 'ngx-breadcrumpy';

@Injectable({ providedIn: 'root' })
export class ProductBreadcrumbResolver implements BreadcrumbResolver {
  public resolve(route: ActivatedRouteSnapshot): Observable<string> {
    return of('Product ' + route.paramMap.get('id')).pipe(delay(300));
  }
}
