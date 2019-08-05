import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dynamic-form-doc',
  templateUrl: './dynamic-form-doc.component.html',
  styleUrls: ['./dynamic-form-doc.component.css']
})
export class DynamicFormDocComponent implements OnInit {

  public description:string;
  public form_json:string;
  public custom_form_json:string;
  public moduleImport:string;
  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "jsonFormData", datatype: 'Object', default: "undefined", description: 'JSON object with element names and properties'},
    {attribute: "formGeneratorName", datatype: 'string', default: "", description: 'Form title'}
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "btnEvent", eventType: 'object', description: 'Returns button name , value and updated jsonFrom Data'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Form elements are created based on data passed in JSON file. Creates and customizes form elements based on the names passed in JSON object.
    `;

    this.moduleImport = `
      import { DynamicFormCreationFromJSON } from 'edge-xotb-ng';
    `;

    this.example = `
      <app-form-generator  formGeneratorName="Custom Form" [jsonFormData]='customFormJson' (btnEvent)="onDynamicFormButtonInfor($event)">
      </app-form-generator>
    `;

    this.form_json = `
    [
      {
        "label": "Username",
        "tag": "input",
        "type": "text",
        "placeholder": "enter name",
        "value": "Srinivas"
      },
      {
        "label": "Email Id",
        "tag": "input",
        "type": "email",
        "placeholder": "please enter email",
        "value": "sri@gmail.com"
      },
      {
        "label": "Password",
        "tag": "input",
        "type": "password",
        "placeholder": "please enter your password"
      },
      {
        "label": "Mobile Number",
        "tag": "input",
        "type": "tel",
        "placeholder": "enter mobile number"
      },
      {
        "label": "Gender",
        "tag": "input",
        "type": "radio",
        "name": "gender",
        "placeholder": "enter name",
        "values": [
          {"name":"male"},
          {"name":"female"}
        ],
        "selectedValue":"male"
      },
      {
        "tag": "select",
        "values": [
          {"name":"1","value":"one"},
          {"name":"2","value":"two"},
          {"name":"3","value":"three"},
          {"name":"4","value":"four"}
        ],
        "label": "user choice",
        "selectedValue":""
      },
      {
        "tag": "input",
        "type": "checkbox",
        "label": "select cources",
        "values": [
          {"name":"java","selected":false},
          {"name":"c","selected":true},
          {"name":".net","selected":false}
        ]
      },
      {
        "tag": "button",
        "buttons": [
          {
            "name": "submit",
            "value": "submit"
          },
          {
            "name": "cancel",
            "value": "cancel"
          }
        ]
      }
    ]
    `;

    this.custom_form_json = `
    [
      {
        "label": "Username",
        "tag": "input",
        "type": "text",
        "placeholder": "enter name",
        "value": "Alex"
      },
      {
        "tag": "select",
        "values": [
          {"name":"Alex","value":"Alex"},
          {"name":"Scott","value":"Scott"},
          {"name":"John","value":"John"},
          {"name":"Deborah","value":"Deborah"}
        ],
        "label": "select user",
        "selectedValue":""
      },
      {
        "tag": "button",
        "buttons": [
          {
            "name": "Update",
            "value": "add"
          },
          {
            "name": "submit",
            "value": "submit"
          },
          {
            "name": "cancel",
            "value": "cancel"
          }
        ]
      }
    ]
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
