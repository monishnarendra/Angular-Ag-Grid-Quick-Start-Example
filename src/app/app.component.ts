import { Component } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { OnInit } from '@angular/core'; 
import { ViewChild } from '@angular/core'; // Importing ViewChild
import { AgGridAngular } from 'ag-grid-angular'; // Importing AgGridAngular

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 
  title = 'my-sample';

  @ViewChild('myGrid') agGrid: AgGridAngular; // Accessing the Instance

  rowData: any;

  constructor(private http: HttpClient) {  }

  columnDefs = [
    {headerName: 'Item Name', field: 'itemname', sortable: true, filter: true, checkboxSelection: true}, 
    {headerName: 'Quantity', field: 'quantity', sortable: true, filter: true},
    {headerName: 'Price / Quantity', field: 'price', sortable: true, filter: true}
  ];

  ngOnInit() {
    this.http.get('https://raw.githubusercontent.com/monishnarendra/Angular-Ag-Grid-Quick-Start-Example/master/my-sample/Data.json').subscribe(
      data => this.rowData = data
    );
  }

  // GetMyRow Function
  GetMyRow() {
    const selectedData = this.agGrid.api.getSelectedNodes().map( 
      node => node.data 
    );
    console.log(JSON.stringify(selectedData));
  }

}