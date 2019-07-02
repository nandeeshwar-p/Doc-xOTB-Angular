import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-multi-selctt-doc',
  templateUrl: './multi-selctt-doc.component.html',
  styleUrls: ['./multi-selctt-doc.component.css']
})
export class MultiSelcttDocComponent implements OnInit {

  public description:string;
  public moduleImport:string;
  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "selectorOptions", datatype: 'ISelectorOptions', default: "Undefined", description: 'It will select the drop down values'},
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "onChange", eventType: 'Object', description: 'It will trigger whenever parent dropdown change happens'},
    {methodName: "onChangeSubOption", eventType: 'Object', description: 'It will trigger whenever child dropdown change happens'},
    {methodName: "addFormControl", eventType: 'Object', description: 'It will trigger the when we click on add new dropdown'},
    {methodName: "deleteControl", eventType: 'Object', description: 'It will trigger the when we click delete dropdown button'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);

  selectorOptions={
    dropdownValues:[{ "mainKey": "Option A","subKeys": ["AA", "AB", "AC", "AD"]},
      { "mainKey": "Option B","subKeys": ["BA", "BB", "BC", "BD"]},
      { "mainKey": "Option C","subKeys": ["CA", "CB", "CC", "CD"]},
      {"mainKey": "Option D","subKeys": ["DA", "DB", "DC", "DD"]}],
      title:"Select category and sub-category",
      styles:{
        containerStyle:"containerStyle",
        headerStyle:"headerStyle",
        mainSelectorStyle : "mainSelectorStyle",
        mainOptionStyle : "mainOptionStyle",
        subSelectorStyle : "subSelectorStyle",
        subOptionStyle : "subOptionStyle"
      },
      extraSelectorsRequired:false
  };
  constructor() {
   }

  ngOnInit() {

    this.description = `
    Multi Select Value Component
    `;
    this.moduleImport = `
      import { MultiSelect } from 'edge-xotb-ng';
    `;

    this.example = `
    Sample example

    <app-multi-select-value [selectorOptions]="selectorOptions"
          (onChange)="onChange($event)" (onChangeSubOption)="onChangeSubOption($event)"
          (addFormControl)="addFormControl($event)" (deleteControl)="deleteControl($event)">
    </app-multi-select-value>

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
