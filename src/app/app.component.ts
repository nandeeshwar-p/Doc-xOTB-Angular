import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ISelectorOptions} from 'edge-xotb-ng';
import {IModalOptions} from 'edge-xotb-ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDGE-xOTB';
  height: any = 0;
  isDemo: boolean = true;
  isDocumentation: boolean = false;
  isOthers: boolean = false;
  isMore: boolean = false;
  position:string='relative';
  isExpand:boolean = false;
  formJson:object;
  customFormJson:object;
  imagesData:object;

  isHome:boolean = true;
  isMultiSelValue:boolean=false;
  isAcordionGroup:boolean=false;
  isModelDialog:boolean = false;
  isSpeedoMeter:boolean=false;
  isDynamicForm:boolean=false;
  isFormCreation:boolean=false;
  isImageSlider:boolean=false;
  isIndetermineTree:boolean=false;
  isPagination:boolean=false;
  isContextMenu:boolean=false;
  isExample4:boolean=false;

  selectorOptions:ISelectorOptions;
  selectorOptions1:ISelectorOptions;
  modalOptions:IModalOptions;

  constructor(private _http: HttpClient){}

  ngOnInit() {
    this.getFormInfo();
    this.getImages();
    this.getFormInfoCustom();
    this.height = window.innerHeight - 87;
    // this.height = window.outerHeight;
    // this.position = 'fixed';

    this.selectorOptions={
      dropdownValues:[
        { "mainKey": "Option A",
          "subKeys": ["AA", "AB", "AC", "AD"]
        },
        {
          "mainKey": "Option B",
          "subKeys": ["BA", "BB", "BC", "BD"]
        },
        {
          "mainKey": "Option C",
          "subKeys": ["CA", "CB", "CC", "CD"]
        },
        {
          "mainKey": "Option D",
          "subKeys": ["DA", "DB", "DC", "DD"]
        }],
        title:"Select category and sub-category",
        styles:{
          containerStyle:"containerStyle",
          headerStyle:"headerStyle",
          mainSelectorStyle : "",
          mainOptionStyle : "",
          subSelectorStyle : "",
          subOptionStyle : ""
        },
        extraSelectorsRequired:true
    };
    this.selectorOptions1={
      dropdownValues:[
        { "mainKey": "Option A",
          "subKeys": ["AA", "AB", "AC", "AD"]
        },
        {
          "mainKey": "Option B",
          "subKeys": ["BA", "BB", "BC", "BD"]
        },
        {
          "mainKey": "Option C",
          "subKeys": ["CA", "CB", "CC", "CD"]
        },
        {
          "mainKey": "Option D",
          "subKeys": ["DA", "DB", "DC", "DD"]
        }],
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
    this.modalOptions={
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
    this.onSelectTab('multiSelvalue');
  }

  onActionButtonClick(buttonName) {
    switch (buttonName) {
      case 'demo':
          this.onDemoClick();
        break;
      case 'documentation':
          this.onDocumentaionClick();
        break;
      case 'others':
          this.onOthersClick();
        break;
      case 'more':
          this.onMoreClick();
        break;
    }
  }

  onSpeedMeter(value){
    console.log('speed meter value '+value);
  }

  onDemoClick() {
    this.isDemo = true;
    this.isDocumentation = false;
    this.isOthers = false;
    this.isMore = false;
  }
  onDocumentaionClick() {
    this.isDemo = false;
    this.isDocumentation = true;
    this.isOthers = false;
    this.isMore = false;
  }
  onOthersClick() {
    this.isDemo = false;
    this.isDocumentation = false;
    this.isOthers = true;
    this.isMore = false;
  }
  onMoreClick() {
    this.isDemo = false;
    this.isDocumentation = false;
    this.isOthers = false;
    this.isMore = true;
  }


  onSelectTab(selButton){
    this.isExpand = false;
    switch(selButton){
      case 'home':
      this.onHome();
      break;
      case 'multiSelvalue':
      this.onMultiSelValue();
      break;
      case 'accordiongroup':
      this.onAccordionGroup();
      break;
      case 'modeldialog':
      this.onModelDialog();
      break;
      case 'speedometer':
      this.onSpeedoMeter();
      break;
      case 'dynamicform':
      this.onDynamicForm();
      break;
      case 'formcreation':
      this.onFormCreation();
      break;
      case 'imageslider':
      this.onImageSlider();
      break;
      case 'indetermintree':
      this.onIndetermineTree();
      break;
      case 'pagination':
      this.onPagination();
      break;
      case 'contextmenu':
      this.onContextMenu();
      break;
    }
  }


  onHome(){
  this.isHome = true;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
  }

  onMultiSelValue(){
    this.isHome = false;
    this.isMultiSelValue=true;
    this.isAcordionGroup=false;
    this.isModelDialog = false;
    this.isSpeedoMeter=false;
    this.isDynamicForm=false;
    this.isFormCreation=false;
    this.isImageSlider=false;
    this.isIndetermineTree=false;
    this.isPagination=false;
    this.isContextMenu=false;
    this.isExample4=false;
  }

onAccordionGroup(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=true;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onModelDialog(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = true;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onSpeedoMeter(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=true;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onDynamicForm(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=true;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onFormCreation(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=true;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onImageSlider(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=true;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onIndetermineTree(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=true;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onPagination(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=true;
  this.isContextMenu=false;
  this.isExample4=false;
}
onContextMenu(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=true;
  this.isExample4=false;
}

getFormInfo() {

  this._http.get('/assets/formdata.json').subscribe((res: any) => {

    this.formJson = res;

  }, error => {

    console.log(error);

  });

}

getFormInfoCustom() {

  this._http.get('/assets/fromdata1.json').subscribe((res: any) => {

    this.customFormJson = res;

  }, error => {

    console.log(error);

  });

}


onDynamicFormButtonInfor(obj){
  console.log(obj);
}

onImageSelected(obj){
  console.log(obj);
}

getImages() {
  this._http.get('./assets/img.json').subscribe((res: any) => {

   this.imagesData = res;

  }, error => {

    console.log(error);

  });

}

onAppDynamicForm(obj){
  console.log(obj);
}

deleteControl(event:any){
  console.log("deleteControl",event);
}
addFormControl(event:any){
  console.log("addFormControl",event);
}
onChangeSubOption(event:any){
  console.log("onChangeSubOption",event);
}
onChange(event:any){
  console.log("onChange",event);
}

}
