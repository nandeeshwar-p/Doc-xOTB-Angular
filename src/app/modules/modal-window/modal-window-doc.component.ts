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
    {attribute: "buttonTitle", datatype: 'string', default: "", description: 'Button text'},
    {attribute: "buttonStyle", datatype: 'string', default: "", description: 'Button styles class'}
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "buttonEvent", eventType: 'object', description: 'Returns show model level and button name'},
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

    <app-modal class="xOTB-margin" [modalOptions]="modalOptions"
        (buttonEvent)="onModalButtonClick($event)">
    </app-modal>

    modalOptions example

    this.modalOptions = {
      title: 'First Modal Window',
      isNextModalRequired: true,
      content: 'Your Content Here',
      customComponent: TempComp,
      nextModalOptions: {
        title: 'Second Modal Window',
        isNextModalRequired: true,
        content: 'Your Content Here',
        customComponent: null,
        nextModalOptions: {
          customComponent: TempComp,
          title: 'Third Modal Window',
          isNextModalRequired: false,
          content: 'Your Content Here',
          nextModalOptions: null
        }
      }
    };

    For dynamic components (customComponent attribute), we should inject in entrycomponent also.

    entryComponents:[TempComp]
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
