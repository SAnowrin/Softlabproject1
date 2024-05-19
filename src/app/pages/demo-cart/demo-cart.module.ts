import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoCartRoutingModule } from './demo-cart-routing.module';
import { DemoCartComponent } from './demo-cart.component';


@NgModule({
  declarations: [
    DemoCartComponent
  ],
  imports: [
    CommonModule,
    DemoCartRoutingModule
  ]
})
export class DemoCartModule { }
