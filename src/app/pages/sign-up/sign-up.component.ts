import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

 formdata!:FormGroup;


constructor(
  private fb: FormBuilder
 ){}

 ngOninit(){
  this.initForm();
 }

  initForm(){
   this.formdata = this.fb.group({
        fname: null,
       lname: null,
      email: null,
      password: null

   })
  }

 onsubmit(){
 console.log('formdata:', this.formdata.value);
    
    
 }

}
