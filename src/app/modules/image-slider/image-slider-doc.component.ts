import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-image-slider-doc',
  templateUrl: './image-slider-doc.component.html',
  styleUrls: ['./image-slider-doc.component.css']
})
export class ImageSliderDocComponent implements OnInit {

  public description:string;
  public img_json:string;
  public custom_form_json:string;
  public moduleImport:string;
  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "imagesData", datatype: 'Object', default: "undefined", description: 'json file for image slide creation'},
    {attribute: "arrowColor", datatype: 'string', default: "#912525", description: 'customize arrow (left and right) colors'},
    {attribute: "texColor", datatype: 'string', default: "#f2f2f2", description: 'customize text color for caption and image number'},
    {attribute: "arrowBgColor", datatype: 'string', default: "white", description: 'customize the arrow (left and right) background colors'},
    {attribute: "bottomButtonColor", datatype: 'string', default: "#bbb", description: 'customize the below button default colors'},
    {attribute: "bottomButtonSelectedColor", datatype: 'string', default: "#717171", description: 'customize the below button selected colors'},
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "currentImage", eventType: 'object', description: 'returns current image object. Triggered when we click the arrow buttons and below buttons'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    This is a carousel kind og image display components. The Components can be customised based ion the developer needs.
    `;

    this.moduleImport = `
      import { ImageSlider } from 'edge-xotb-ng';
    `;

    this.example = `
    Sample default example

    <app-image-slider [imagesData]='imagesData' (currentImage)="onImageSelected($event);">
    </app-image-slider>

    Sample attribute example

    <app-image-slider [imagesData]='imagesData' (currentImage)="onImageSelected($event);" [arrowColor]="'black'"
    [arrowBgColor]="'green'" [texColor]="'blue'"
    [bottomButtonColor]="'blue'" [bottomButtonSelectedColor]="'green'">
    </app-image-slider>
    `;

    this.img_json = `
    [
      {
        "imageNumber":1,
        "image":"https://tse2.mm.bing.net/th?id=OIP.3HqD3gjGShfdWJ-XowfgagHaE8&pid=Api&w=1200&h=800&rs=1&p=0",
        "captionText":"Nature Image"
      },
      {
        "imageNumber":2,
        "image":"https://tse4.mm.bing.net/th?id=OIP.U-VU51_0yAcu_Fh7x3j2uQHaE8&pid=Api",
        "captionText":"Construction Image"
      },
      {
        "imageNumber":3,
        "image":"https://tse4.mm.bing.net/th?id=OIP.WOo0xJOMl5ZeT1j1qw9IFAHaEo&pid=Api",
        "captionText":"Rainbow Image"
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
