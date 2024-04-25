import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isMenu = false;




  /**
   * MENU TOGGLE METHOD
   * onToggleMenu()
   */
  onToggleMenu(){
       this.isMenu = !this.isMenu;
  }

}
