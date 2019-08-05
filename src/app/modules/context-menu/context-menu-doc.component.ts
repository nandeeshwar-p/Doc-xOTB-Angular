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
    {attribute: "data", datatype: 'object', default: "", description: 'Pass Menuitems to be displayed in ContextMenu'},
    ];

  private output_element_data: IoutputElement[] = [
    {methodName: "optionClick", eventType: 'event', description: 'Callback on context menu option click'},
  {methodName: "closed", eventType: 'event', description: 'Triggered on context menu closure'},
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
    <div class="parent">Sample Context Menu
      <app-context-menu [data]=data1 (optionClick)="contextMenuEvent($event)" (closed)="contextMenuEvent($event)"></app-context-menu>
    </div>
    
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

