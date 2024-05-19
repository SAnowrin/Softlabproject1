import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { HomeComponent } from '../home/home.component';
import { BannerMainComponent } from '../home/banner-main/banner-main.component';

const routes: Routes = [
  {
    path:"",
    component:RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
