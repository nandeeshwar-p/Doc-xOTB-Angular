import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
//import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-pagination-doc',
  templateUrl: './angular-pagination-doc.component.html',
  styleUrls: [ './styles.css','./angular-pagination-doc.component.css' ]
})

export class PaginationDocComponent implements OnInit {  
  public description:string;
  public moduleImport:string;
  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "pagingData", datatype: 'object', default: "", description: 'Provides the total no of items.'},
    {attribute: "pageSize", datatype: 'Number', default: "10", description: 'Change page size.'},
    {attribute: "maxPages", datatype: 'Number', default: "20", description: 'Change the number of page to be displayed.'},
    {attribute: "title", datatype: 'String', default: "", description: 'Pagination Card title.'},
    {attribute: "cardHeader", datatype: 'String', default: "", description: 'Card header style class'},
    {attribute: "bodyStyle", datatype: 'String', default: "", description: 'Page style class'}
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "onPageChange", eventType: 'event', description: 'Triggered on page change'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Pagination is a component that displays page numbers. It will not manipulate your data collection. You will have to split your data 
    collection into pages yourself.
    `;

    this.moduleImport = `
    import { Pagination } from 'edge-xotb-ng';
    `;
    
    this.example = `
    <app-pagination title="Custom Pagination " cardHeader="pagination-header" 
      bodyStyle="pagination-body" pageSize="5" maxPages="10" 
      [pagingData]="pagingData1" class="xOTB-margin" (onPageChange)="onPageChange($event)"></app-pagination>
    `;
  }
}

export interface IinputElement {
  attribute: string;
  datatype: string;
  default: string;
  description: string;
}

export interface IoutputElement {
  methodName: string;
  eventType: string;
  description: string;
}
