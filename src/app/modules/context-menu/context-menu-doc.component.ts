import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-context-menu-doc',
  templateUrl: './context-menu-doc.component.html',
  styleUrls: ['./context-menu-doc.component.scss']
})
export class ContextMenuDocComponent implements OnInit {
  public description:string;
  public moduleImport:string;
  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "data", datatype: 'object', default: "", description: 'Here we can pass the context menu options.'},
    ];

  private output_element_data: IoutputElement[] = [
    {methodName: "optionClick", eventType: 'event', description: 'Get the callback when context menu option click'},
  {methodName: "closed", eventType: 'event', description: 'This is the callback when context menu close'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {

  }

  ngOnInit() {

    this.description = `
    A context menu (also called pop up or pop-up menu) is a menu in a graphical user interface (GUI) that appears upon user interaction, such
    as a right-click mouse operation.
    `;

    this.moduleImport = `
      import { ContextMenu } from 'edge-xotb-ng';
    `;

    this.example = `
    Sample default example

    <app-context-menu class="xOTB-margin" (optionClick)="click($event)" (closed)="click($event)"></app-context-menu>
   
    Sample attribute example

    <app-context-menu class="xOTB-margin" [data]=data (optionClick)="click($event)" (closed)="click($event)"></app-context-menu>
    
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

