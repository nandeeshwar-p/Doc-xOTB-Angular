import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-speedometer-doc',
  templateUrl: './speedometer-doc.component.html',
  styleUrls: ['./speedometer-doc.component.css']
})
export class SpeedometerDocComponent implements OnInit {

  public description:string;
  public moduleImport:string;
  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "wheelColor", datatype: 'String', default: "#f6f5f6", description: 'It will change the Wheel Color'},
    {attribute: "speedoMeterColor", datatype: 'String', default: "#fe6c5c", description: 'It will change the speedo meter Wheel color'},
    {attribute: "max", datatype: 'Number', default: "100", description: 'It will set the maximum value for speedometer'}
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "selectedValue", eventType: 'number', description: 'It will give you the selected SpeedometerValue'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Speedometer Component
    `;
    this.moduleImport = `
      import { Speedometer } from 'edge-xotb-ng';
    `;
    this.example = `
    Sample default example

    <app-speedo-meter (selectedValue)="onSpeedMeter($event)"></app-speedo-meter>

    Sample attribute example

    <app-speedo-meter [speedoMeterColor]="'red'" [wheelColor]="'green'" [max]="300"
    (selectedValue)="onSpeedMeter($event)"></app-speedo-meter>
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
