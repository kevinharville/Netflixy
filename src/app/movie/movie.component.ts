import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('title2') title: string;
  @Input('id') id: string;
  @Input('img') img: string;
  @Input('buttonText') buttonText: string;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeStatus() {
 
    if (this.buttonText === "Remove") {
      this.remove.emit(this.id);
    }
    else {
      console.log('adding');
      this.add.emit(this.id);
    }
  }
  showButton() {
    let thisElement = document.getElementById("button" + this.id);
    thisElement.style.visibility = 'visible';
  }
  hideButton() {
    let thisElement = document.getElementById("button" + this.id);
    thisElement.style.visibility = 'hidden';
  }
}
