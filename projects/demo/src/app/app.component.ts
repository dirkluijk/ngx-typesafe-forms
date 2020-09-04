import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from 'ngx-typesafe-forms';
import { FormPerson } from './models/form-person';
import { Person } from './models/person';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public person: Person;

  public name = new FormControl<string>() ;
  public birthDate = new FormControl<Date>();

  public myFormGroup = new FormGroup<FormPerson>({
    name: this.name,
    birthDate: this.birthDate,
  });

  constructor() {
    this.myFormGroup.setValue({name: 'John Doe', birthDate: new Date()})
  }

  public ngOnInit() {
    this.myFormGroup.value$.subscribe((formValue: Person) => {
      this.person = formValue;
    });
  }

  public onFormSubmit() {
    this.person = this.myFormGroup.value as Person;
  }
}
