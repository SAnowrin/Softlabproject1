import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerMainComponent } from './banner-main/banner-main.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { TitleSecComponent } from './title-sec/title-sec.component';
import { LocationSecComponent } from './location-sec/location-sec.component';
import { ImgSecComponent } from './img-sec/img-sec.component';
import { FooterSecComponent } from './footer-sec/footer-sec.component';
import { ButtonComponent } from './button/button.component';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { PCardModule } from 'src/app/shared/components/p-card/p-card.module';
import { ContentModule } from '../content/content.module';


@NgModule({
  declarations: [
    HomeComponent,
    BannerMainComponent,
    ProductListComponent,
    NewProductsComponent,
    TitleSecComponent,
    LocationSecComponent,
    ImgSecComponent,
    FooterSecComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavBarModule,
    PCardModule,
    ContentModule,
  ]
})
export class HomeModule { }
