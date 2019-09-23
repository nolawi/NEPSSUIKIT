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
  public parentData: Object[];
  public childGrid: any;
  public secondChildGrid: any;

  ngOnInit(): void {
    this.data = data;
    this.parentData = data;
    this.secondChildGrid = {
      dataSource: data,
      queryString: 'CustomerID',
      columns: [
        { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 75 },
        { field: 'Phone', headerText: 'Phone', width: 100 },
        { field: 'Address', headerText: 'Address', width: 120 },
        { field: 'Country', headerText: 'Country', width: 100 },
      ],
    };
    this.childGrid = {
      dataSource: data,
      queryString: 'EmployeeID',
      allowPaging: true,
      pageSettings: { pageSize: 6, pageCount: 5 },
      columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
      ],
      childGrid: this.secondChildGrid,
    };
  }
}
