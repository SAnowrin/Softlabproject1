import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RegisterComponent } from './pages/register/register.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
       {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
       },
       {
        path:"home",
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
       },
       {
        path:"content",
        loadChildren: () => import('./pages/content/content.module').then(m => m.ContentModule)
       },
       {
        path:"material",
        loadChildren: () => import('./pages/material/material.module').then(m => m.MaterialModule)
       },
       {
        path:"forms",
        loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)
       },

      //  {
      //   path:"register",
      //   loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
      //  },
       {
        path:"register",
        component:RegisterComponent
      },
      // {
      //   path:"sign-up",
      //   component:SignUpComponent
      // },
      // {
      //   path:"test",
      //   component:TestComponent
      // },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
