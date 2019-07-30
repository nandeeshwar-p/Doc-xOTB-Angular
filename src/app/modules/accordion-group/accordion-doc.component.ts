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
    Sample example

    <app-accordion [openFirst]="openFirst1" (toggle)="onChangeAccordionToggle($event)>
      <accordion-group [title]="title1" [description]="description1" [icon]="icon1" [open]="open1" [close]="close1">
          <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
              </div>
              <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
              </div>
              <div class="checkbox">
              <label><input type="checkbox" name="remember"> Remember me</label>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>            
      </accordion-group>
      <accordion-group [title]="title2" [description]="description1" [icon]="icon2" [open]="open2" [close]="close2">
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                      <button type="button" class="btn btn-secondary">1</button>
                      <button type="button" class="btn btn-secondary">2</button>
                      
                      <div class="btn-group" role="group">
                          <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Dropdown
                          </button>
                          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                          <a class="dropdown-item" href="#">Dropdown link</a>
                          <a class="dropdown-item" href="#">Dropdown link</a>
                          </div>
                      </div>
                      </div>                 
      </accordion-group>
  </app-accordion>

  Sample custom example

  <app-accordion [openFirst]="openFirst2" (toggle)="onChangeAccordionToggle($event)>
    <accordion-group [title]="title3" [description]="description2" [icon]="icon3" [open]="open3" [close]="close3">
            <form class="form-horizontal">
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="email">Email:</label>
                      <div class="col-sm-10">
                        <p class="form-control-static">someone@example.com</p>
                      </div>
                    </div>
                  </form>  
    </accordion-group>
    <accordion-group [title]="title4" [description]="description2" [icon]="icon4" [open]="open4" [close]="close4">
      <form>
        <div class="form-group">
        <label for="inputsm">Small input</label>
        <input class="form-control input-sm" id="inputsm" type="text">
        </div>
        <div class="form-group">
        <label for="inputdefault">Default input</label>
        <input class="form-control" id="inputdefault" type="text">
        </div>
        <div class="form-group">
        <label for="inputlg">Large input</label>
        <input class="form-control input-lg" id="inputlg" type="text">
        </div>
      </form>      
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
