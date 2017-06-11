import { Component, OnInit } from '@angular/core';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { PaginationModule } from "ngx-bootstrap/pagination";


interface Car {
  id:number;
  vin:string;
  year:string;
  color:string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: [
    './grid.component.css'
  ]
})


export class GridComponent implements OnInit {

  cars: Car[];
  cols: any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      {field: 'id', header: 'ID'},
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'color', header: 'Color'}
    ];

    this.cars = [];
    for (var i=0; i<1000;i++) {
      this.cars.push({id:i, vin:'Cherry', year:'2016', color:'red'})
    }
  }

}
