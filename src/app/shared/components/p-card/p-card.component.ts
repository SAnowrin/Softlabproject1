import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-p-card',
  templateUrl: './p-card.component.html',
  styleUrls: ['./p-card.component.scss']
})
export class PCardComponent {
  @Input() item : any = null;
  @Output() passDataEvent = new EventEmitter();
  



  onLikeCount(){
    console.log('liked: ');
    this.passDataEvent.emit("hi");
  
  }
}
