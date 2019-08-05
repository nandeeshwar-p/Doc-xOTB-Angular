import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-accordion-doc',
  templateUrl: './accordion-doc.component.html',
  styleUrls: ['./accordion-doc.component.css']
})
export class AccordionDocComponent implements OnInit {

  public description:string;
  public moduleImport:string;
  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "openFirst", datatype: 'boolean', default: "false", description: 'It will set the first accordion open true or false'},
    {attribute: "title", datatype: 'string', default: "", description: 'It will set the header title'},
    {attribute: "description", datatype: 'string', default: "", description: 'It will set the header title'},
    {attribute: "icon", datatype: 'string', default: "", description: 'It will set icon class'},
    {attribute: "open", datatype: 'string', default: "", description: 'It will set open icon class'},
    {attribute: "close", datatype: 'string', default: "", description: 'It will set close icon class'},
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "toggle", eventType: 'object', description: 'Emitted when user clicks on group titlebar'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Accordion helps to display the content, on user action. This Accordion component is a material based components, which can be customised to fit the developer need.
    `;

    this.moduleImport = `
    import { AccordionGroup } from 'edge-xotb-ng';
    `;

    this.example = `
    <app-accordion [openFirst]="openFirst2" (toggle)="onChangeAccordionToggle($event)">
      <accordion-group [title]="title3" [description]="description2" [icon]="icon3" [open]="open3" [close]="close3">
        <app-multi-select class="xOTB-margin" [selectorOptions]="selectorOptions"
        (onChange)="onChange($event)" (onChangeSubOption)="onChangeSubOption($event)"
        (addFormControl)="addFormControl($event)" (deleteControl)="deleteControl($event)">
        </app-multi-select>
      </accordion-group>
    </app-accordion>      
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
