import { Component, OnInit } from '@angular/core';
import { data } from './dataSample';

@Component({
  selector: 'ngx-ej2-grid',
  templateUrl: './ej2-grid.component.html',
  styleUrls: ['./ej2-grid.component.scss'],
})
export class Ej2GridComponent implements OnInit {
  constructor() {}

  public data: object[];

  ngOnInit(): void {
    this.data = data;
  }
}
