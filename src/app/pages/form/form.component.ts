import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  formData!: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formData = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    console.log('isvalid:', this.formData.valid)

    console.log('onSubmit=== ', this.formData.value)
  }

}
