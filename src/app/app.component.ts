import { Component } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NETFLIXY';
  myData = [];
  myList = [];
  recommendations = [];
  constructor(
    private fetchService: FetchService
  ) { }

  ngOnInit() {
    this.fetchService.getJSON().subscribe(data => {
      this.myData = data;
      console.log(this.myData);
      this.myList = this.myData["mylist"];
     // console.log(this.myData.mylist);
      this.recommendations = this.myData["recommendations"];
    });
  }

  faveThis(title, id, img) {
    let myTempObject = {"title": title, "id": id, "img": img};
     this.myList.push(myTempObject);
     this.removeItem(id, this.recommendations);
  }

  removeItem(id, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        list.splice(i, 1);
        return;
      }
    }
  }
}
