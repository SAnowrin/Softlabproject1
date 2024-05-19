import { Component } from '@angular/core';
import { infs } from 'src/app/core/header/db/products.db';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent {
  items: any[] = infs;
}

