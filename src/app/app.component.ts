import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ISelectorOptions} from 'ng-xotb';
import {IModalOptions} from 'ng-xotb';
import {TreeNode} from 'ng-xotb';

@Component({
  template: `
    <div>external component</div>
  `,
  selector: 'comp-to-add'
})
export class TempComp {}


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
  modalOptions1:IModalOptions;

  buttonStyle:any;
  buttonTitle:String;
  tree:TreeNode;
  tree1:TreeNode;
  pagingData:Array<any>;
  pagingData1:Array<any>;

  public title1;
  public title2;
  public title3;
  public title4;
  public openFirst1;
  public toggle1;
  public openFirst2;
  public toggle2;
  public description1;
  public description2;
  public icon1;
  public open1;
  public close1;
  public icon3;
  public open3;
  public close3;

  data = [
    {name: 'Option1', disabled: true},
    {name: 'Option2'},
    {name: 'Option3'},
    {name: 'Option4'}
  ];
  data1 = [
    {name: 'Subscribe', disabled: true},
    {name: 'Edit'},
    {name: 'Delete'},
    {name: 'Properties'}
  ];
  constructor(private _http: HttpClient){}

  ngOnInit() {

    this.title1 = '';
    this.title2 = '';
    this.title3 = '';
    this.title4 = '';
    this.description1 = 'Default Accordion';
    this.description2 = 'Customized Accordion';
    this.icon1 = 'icon1';
    this.open1 = 'open1';
    this.close1 = 'close1';

    this.icon3 = 'icon3';
    this.open3 = 'open3';
    this.close3 = 'close3';

    this.openFirst1 = false;
    this.toggle1 = false;
    this.openFirst2 = true;
    this.toggle2 = true;

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
          containerStyle:"",
          headerStyle:"",
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
          containerStyle:"containerStyle1",
          headerStyle:"headerStyle1",
          mainSelectorStyle : "mainSelectorStyle1",
          mainOptionStyle : "mainOptionStyle1",
          subSelectorStyle : "subSelectorStyle1",
          subOptionStyle : "subOptionStyle1"
        },
        extraSelectorsRequired:false
    };


    this.modalOptions = {
      title: 'First Modal Window',
      isNextModalRequired: true,
      content: 'Your Content Here',
      customComponent: TempComp,
      headerStyle:null,
      footerStyle:null,
      bodyStyle:null,
      btnStyle:null,
      nextModalOptions: {
        title: 'Second Modal Window',
        isNextModalRequired: true,
        content: 'Your Content Here',
        customComponent: null,
        headerStyle:null,
        footerStyle:null,
        bodyStyle:null,
        btnStyle:null,
        nextModalOptions: {
          customComponent: TempComp,
          title: 'Third Modal Window',
          isNextModalRequired: false,
          content: 'Your Content Here',
          nextModalOptions: null,
          headerStyle:null,
          footerStyle:null,
          bodyStyle:null,
          btnStyle:null
        }
      }
    };

    this.modalOptions1 = {
      title: 'First Modal Window',
      isNextModalRequired: true,
      content: 'Your Content Here',
      customComponent: TempComp,
      headerStyle:'modal-header',
      footerStyle:'modal-footer',
      bodyStyle:'modal-body',
      btnStyle:'btn-style',
      nextModalOptions: {
        title: 'Second Modal Window',
        isNextModalRequired: true,
        content: 'Your Content Here',
        customComponent: null,
        headerStyle:'modal-header',
        footerStyle:'modal-footer',
        bodyStyle:'modal-body',
        btnStyle:'btn-style',
        nextModalOptions: {
          customComponent: TempComp,
          title: 'Third Modal Window',
          isNextModalRequired: false,
          content: 'Your Content Here',
          nextModalOptions: null,
          headerStyle:'modal-header',
          footerStyle:'modal-footer',
          bodyStyle:'modal-body',
          btnStyle:'btn-style'
        }
      }
    };

    this.tree = {
      label: 'TreeStructure',
      checked: false,
      children: [
        {
          label: 'src',
          checked: false,
          children: [
            {
              label: 'app',
              checked: false,
              children: [
                {
                  label: 'app.component.html',
                  checked: false,
                  children: []
                },
                {
                  label: 'app.component.ts',
                  checked: false,
                  children: []
                },
                {
                  label: 'app.component.css',
                  checked: false,
                  children: []
                },
                {
                  label: 'tree-node',
                  checked: false,
                  children: [
                    {
                      label: 'tree-node.component.html',
                      checked: false,
                      children: []
                    },
                    {
                      label: 'tree-node.component.ts',
                      checked: false,
                      children: []
                    },
                    {
                      label: 'tree-node.component.css',
                      checked: false,
                      children: []
                    }
                  ]
                }
            ]
            }
          ]
        },
        {
          label: 'assets',
          checked: false,
          children: [
            {
              label: '.gitkeep',
              checked: false,
              children: []
            }
          ]
        },
        {
          label: 'environments',
          checked: false,
          children: [
            {
              label: 'environment.prod.ts',
              checked: false,
              children: []
            },
            {
              label: 'environment.ts',
              checked: false,
              children: []
            }
          ]
        },
        {
            label: 'index.html',
            checked: false,
            children: []

        }
      ]
    };

    this.tree1 = {
      label: 'Alex',
      checked: false,
      children: [
        {
          label: 'Emma',
          checked: false,
          children: [
            {
              label: 'Kelvin',
              checked: false,
              children: [
                {
                  label: 'William',
                  checked: false,
                  children: []
                },
                {
                  label: 'John',
                  checked: false,
                  children: []
                },
                {
                  label: 'James',
                  checked: false,
                  children: []
                },
                {
                  label: 'Benjamin',
                  checked: false,
                  children: [
                    {
                      label: 'Lucas',
                      checked: false,
                      children: []
                    },
                    {
                      label: 'Michael',
                      checked: false,
                      children: []
                    },
                    {
                      label: 'Jacob',
                      checked: false,
                      children: []
                    }
                  ]
                }
            ]
            }
          ]
        },
        {
          label: 'Sebastian',
          checked: false,
          children: [
            {
              label: 'Samuel',
              checked: false,
              children: []
            }
          ]
        },
        {
          label: 'Grayson',
          checked: false,
          children: [
            {
              label: 'Lily',
              checked: false,
              children: []
            },
            {
              label: 'Noha',
              checked: false,
              children: []
            }
          ]
        },
        {
            label: 'Anthony',
            checked: false,
            children: []

        }
      ]
    };

    this.pagingData = [
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
      "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
      "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
      "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
      "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
      "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
      "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
      "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
      "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
      "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
      "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
      "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
      "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
      "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
      "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    ];

    this.pagingData1 = [
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
      "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
      "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    ];

    this.buttonTitle = "Open Custom Modal";
    this.buttonStyle = "modal-instruction";
    this.onSelectTab('multiSelvalue');
  }

  contextMenuEvent(obj){
    console.log(JSON.stringify(obj));
  }

  onChangeAccordionToggle(obj){
    console.log(obj);
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

  onPageChange(event){
    console.log('pageChange event ',event);
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

  onModalButtonClick(obj){
    console.log('onModalButton '+ JSON.stringify(obj));
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
  this.isDynamicForm=false;
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
