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
    {attribute: "wheelColor", datatype: 'String', default: "#f6f5f6", description: 'Change the Wheel Color'},
    {attribute: "speedoMeterColor", datatype: 'String', default: "#fe6c5c", description: 'Change the speedo meter Wheel color'},
    {attribute: "max", datatype: 'Number', default: "100", description: 'Set the maximum value for speedometer'},
    {attribute: "title", datatype: 'String', default: "#fe6c5c", description: 'Component Title'},
    {attribute: "labelText", datatype: 'String', default: "#fe6c5c", description: 'title of value label'}
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "selectedValue", eventType: 'number', description: 'Return current Speedometer value'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Component which renders a speedmeter. The values on the meter changes based in the input value. It has options to customize the look and feel, set max. value,etc.
    `;
    this.moduleImport = `
      import { Speedometer } from 'edge-xotb-ng';
    `;
    this.example = `
      <app-speedo-meter class="xOTB-margin" title="Sample Rating" labelText="Temperature"  
        [speedoMeterColor]="'orange'" [wheelColor]="'green'" [max]="300" (selectedValue)="onSpeedMeter($event)">
      </app-speedo-meter>
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
