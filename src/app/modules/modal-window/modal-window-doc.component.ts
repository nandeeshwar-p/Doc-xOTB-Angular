import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-modal-window-doc',
  templateUrl: './modal-window-doc.component.html',
  styleUrls: ['./modal-window-doc.component.css']
})
export class ModalWindowDocComponent implements OnInit {

  public description:string;
  public moduleImport:string;
  modalOptions={
    title:"First Modal Window",
    isNextModalRequired:true,
    content:"Your Content Here",
    nextModalOptions:{
      title:"Second Modal Window",
      isNextModalRequired:true,
      content:"Your Content Here",
      nextModalOptions:{
        title:"Third Modal Window",
        isNextModalRequired:false,
        content:"Your Content Here",
        nextModalOptions:null
      }
    }
  }
  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "modalOptions", datatype: 'IModalOptions', default: "Undefined", description: 'Pass modal window title, content, css classes as JSON object'},
  ];

  private output_element_data: IoutputElement[] = [
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Modal(Pop-up) window to display the content, as and when required. It can display modal windows till three levels. Provides options to customize the look and feel. 
    `;
    this.moduleImport = `
      import { ModalWindow } from 'edge-xotb-ng';
    `;

    this.example = `
    Sample example

    <app-modal [modalOptions]="modalOptions">
    </app-modal>

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
