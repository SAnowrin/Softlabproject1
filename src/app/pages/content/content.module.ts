import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { HeroSecComponent } from './hero-sec/hero-sec.component';
import { FrameComponent } from './frame/frame.component';


@NgModule({
  declarations: [
    ContentComponent,
    HeroSecComponent,
    FrameComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NavBarModule
  ],
  exports:[
    ContentComponent,
  ]
})
export class ContentModule { }
