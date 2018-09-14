import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div> <input  [id]="myID" type="text" value="Abhijeet"/> </div>
    <div> <input  id="{{myID}}" type="text" value="Abhijeet G"/> </div>
    <div> <input  disabled type="text" value="Abhijeet Kumar"/> </div>
    <div> <input  disabled="false" type="text" value="Abhijeet Kumar 1"/> </div>
    <div> <input  [disabled]="false"  type="text" value="Abhijeet Kumar 2"/> </div>
    <div> <input  disabled="{{false}}"  type="text" value="Abhijeet Kumar 3"/> </div>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public myID: String = 'newID';
  constructor() { }

  ngOnInit() {
  }

}
