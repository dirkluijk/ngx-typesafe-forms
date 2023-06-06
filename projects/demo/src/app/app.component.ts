import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Validators, FormGroup as AngularFormGroup } from '@angular/forms';
import { FormArray, FormControl, FormGroup } from 'ngx-typesafe-forms';

interface FooForm {
  id: FormControl<string>;
  name: FormControl<string>;
  optionalProp: FormControl<string | undefined>;
  arrayProp: FormArray<FormControl<string>>;
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

  public readonly formGroup = new FormGroup<FooForm>({
    id: new FormControl<string>('', { nonNullable: true }),
    name: new FormControl<string>('', { nonNullable: true }),
    optionalProp: new FormControl<string | undefined>('', { nonNullable: true }),
    arrayProp: new FormArray([new FormControl<string>('', { nonNullable:  true })])
  });

  // should be assignable:
  public readonly formGroupNg: AngularFormGroup = new FormGroup({
    id: new FormControl<string>('', { nonNullable: true }),
    name: new FormControl<string>('', { nonNullable: true }),
    optionalProp: new FormControl<string | undefined>('', { nonNullable: true }),
    arrayProp: new FormArray([new FormControl<string>('', { nonNullable:  true })])
  });

  public ngOnInit(): void {
    const optionalPropControl1: FormControl<string | undefined> = this.formGroup.controls.optionalProp;

    // tslint:disable-next-line
    optionalPropControl1
  }
}
