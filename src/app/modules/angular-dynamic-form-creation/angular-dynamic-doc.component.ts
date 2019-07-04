import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-angular-dynamic-doc',
  templateUrl: './angular-dynamic-doc.component.html',
  styleUrls: ['./angular-dynamic-doc.component.css']
})
export class AngularDynamicDocComponent implements OnInit {

  public description:string;
  public moduleImport:string;
  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "btnColor", datatype: 'String', default: "#00ceff", description: 'Change the button Color'},
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "formValue", eventType: 'object', description: 'return the updated Data,triggered on input change and button click'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Dynamic form generator, based on user action. Forms can be genreated till multiple levels, based on user actions.
    `;

    this.moduleImport = `
    import { DynamicFormCreation } from 'edge-xotb-ng';
    `;
    
    this.example = `
    Sample default example

    <app-dynamic-form (formValue)="onAppDynamicForm($event);" class="xOTB-margin">
    </app-dynamic-form>

    Sample attribute example

    <app-dynamic-form [btnColor]="'green'" (formValue)="onAppDynamicForm($event);" class="xOTB-margin">
    </app-dynamic-form>
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
