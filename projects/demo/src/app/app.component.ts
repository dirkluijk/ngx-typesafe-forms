import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Validators, FormGroup as AngularFormGroup } from '@angular/forms';

import { AbstractControl, FormArray, FormControl, FormGroup } from '../../../ngx-typesafe-forms/src/public-api';

interface Foo {
  id: string;
  name: string;
  optionalProp?: string;
  arrayProp: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public readonly formControls = {
    name: new FormControl('bla', Validators.required)
  };

  public readonly formGroup = new FormGroup<Foo>({
    id: new FormControl<string>(),
    name: new FormControl<string>(),
    optionalProp: new FormControl<string | undefined>(),
    arrayProp: new FormArray<string>([new FormControl<string>()])
  });

  // should be assignable:
  public readonly formGroupNg: AngularFormGroup = new FormGroup<Foo>({
    id: new FormControl<string>(),
    name: new FormControl<string>(),
    optionalProp: new FormControl<string | undefined>(),
    arrayProp: new FormArray<string>([new FormControl<string>()])
  });

  public ngOnInit(): void {
    // @ts-expect-error
    const optionalPropControl1: FormControl<string | undefined> = this.formGroup.controls.optionalProp;
    const optionalPropControl2: FormControl<string | undefined> = this.formGroup.getFormControl('optionalProp');

    // tslint:disable-next-line
    optionalPropControl1
    // tslint:disable-next-line
    optionalPropControl2

    if (this.formGroup.contains('optionalProp')) {
      const optionalPropControl3: AbstractControl<string | undefined> = this.formGroup.controls.optionalProp;

      // tslint:disable-next-line
      optionalPropControl3
    }
  }
}
