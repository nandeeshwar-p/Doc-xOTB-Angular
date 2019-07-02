import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface TreeNode {

 label: string;
 checked: boolean;
 children: TreeNode[];

 }

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
selector: 'app-indetermine-tree-doc',

templateUrl: './indeterminate-tree-doc.component.html',
styleUrls: [ './indeterminate-tree-doc.component.css' ],
encapsulation: ViewEncapsulation.Emulated

})

export class IndetreeDocComponent implements OnInit {
  public description:string;
  public moduleImport:string;
  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "node", datatype: 'object', default: "Void", description: 'It will provide the node items.'},
    {attribute: "image1", datatype: 'Number', default: "", description: 'Here we can change the primary image url.'},
    {attribute: "image2", datatype: 'String', default: "", description: 'Here we can change the secondary image url.'},
    {attribute: "getColorCode", datatype: 'String', default: "red", description: 'Here we can change the font color.'}
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "selectEvents", eventType: 'event', description: 'Here we recieved the callback function when we click the selected node.'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Indetermine Tree Highlights In this mode when the user clicks an item its children or sub items also become. 
    `;

    this.moduleImport = `
      import { IndeterminateTreeStructure } from 'edge-xotb-ng';
    `;

    this.example = `
    Sample default example

    <app-tree-node (selectEvents)="handleSelection( $event )" [selectedNode]="selectedTreeNode"> </app-tree-node>   

    Sample attribute example

    <app-tree-node [node]="tree" image1="green.png" image2="../../assets/red.png" getColorCode="red" (selectEvents)="handleSelection( $event )"
    [selectedNode]="selectedTreeNode"> </app-tree-node>
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

