import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
  ]
})
export class MaterialModule { }
