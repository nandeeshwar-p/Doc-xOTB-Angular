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
    {attribute: "title", datatype: 'String', default: "accordion", description: 'It will set the header title'},
  ];

  private output_element_data: IoutputElement[] = [
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Accordion Component
    `;

    this.moduleImport = `
    import { AccordionGroup } from 'edge-xotb-ng';
    `;

    this.example = `
    Sample example

    <div fxLayout="column" fxLayoutGap="20px">
      <accordion-group [title]="'first accordion'">
        <h4>content</h4>
      </accordion-group>
      <accordion-group [title]="'second accordion'">
        <h4>content</h4>
      </accordion-group>
      <accordion-group [title]="'third accordion'">
        <h4>content</h4>
      </accordion-group>
      <accordion-group [title]="'four accordion'">
        <h4>content</h4>
      </accordion-group>
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
