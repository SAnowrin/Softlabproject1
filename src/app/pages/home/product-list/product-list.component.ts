import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
   
   
   totallike: number= 0;


   onlikeclicked(event:any){
    console.log(event);
    // this.like += 1;
    this.totallike +=1;
   }
}
