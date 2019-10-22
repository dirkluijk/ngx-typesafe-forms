import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb, BREADCRUMBS } from 'ngx-breadcrumpy';

@Component({
  selector: 'app-breadcrumbs',
  template: `
    <ng-container *ngFor="let b of breadcrumbs$ | async; last as last">
      <ng-container *ngIf="!last">
        <a [routerLink]="b.url">{{ b.label }}</a> <span> / </span>
      </ng-container>
      <ng-container *ngIf="last">
        <span>{{ b.label }}</span>
      </ng-container>
    </ng-container>
  `
})
export class BreadcrumbsComponent {
  constructor(@Inject(BREADCRUMBS) public breadcrumbs$: Observable<Breadcrumb[]>) {}
}
