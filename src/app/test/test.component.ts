import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div><input  [id]="myID" type="text" value="Abhijeet"/></div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public myID: String = 'newID';
  constructor() { }

  ngOnInit() {
  }

}
