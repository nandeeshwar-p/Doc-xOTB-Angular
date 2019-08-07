import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, TempComp } from './app.component';
import { HeaderEDGEComponent } from './header-edge/header-edge.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelect } from 'ng-xotb';
import { AccordionGroup } from 'ng-xotb';
import { ModalWindow } from 'ng-xotb';
import { Pagination } from 'ng-xotb';
import { Speedometer } from 'ng-xotb';
import { DynamicFormCreation } from 'ng-xotb';
import { DynamicFormCreationFromJSON } from 'ng-xotb';
import { ImageSlider } from 'ng-xotb';
import { IndeterminateTreeStructure } from 'ng-xotb';
import { ContextMenu } from 'ng-xotb';
import { DemoMaterialModule } from './demo.material.module';

/*documentation related components*/
import {AccordionDocComponent} from './modules/accordion-group/accordion-doc.component';
import {AngularDynamicDocComponent} from './modules/angular-dynamic-form-creation/angular-dynamic-doc.component';
import {PaginationDocComponent} from './modules/angular-pagination/angular-pagination-doc.component';
import {ContextMenuDocComponent} from './modules/context-menu/context-menu-doc.component';
import {DynamicFormDocComponent} from './modules/dynamic-ng-form-creation-from-json/dynamic-form-doc.component';
import {ImageSliderDocComponent} from './modules/image-slider/image-slider-doc.component';
import {IndetreeDocComponent} from './modules/indeterminate-tree-structure/indeterminate-tree-doc.component';
import {ModalWindowDocComponent} from './modules/modal-window/modal-window-doc.component';
import {MultiSelcttDocComponent} from './modules/multi-select-value-exclusion/multi-selctt-doc.component';
import {SpeedometerDocComponent} from './modules/speedometer/speedometer-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderEDGEComponent,
    AccordionDocComponent,
    AngularDynamicDocComponent,
    PaginationDocComponent,
    ContextMenuDocComponent,
    DynamicFormDocComponent,
    ImageSliderDocComponent,
    IndetreeDocComponent,
    ModalWindowDocComponent,
    MultiSelcttDocComponent,
    SpeedometerDocComponent,
    TempComp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MultiSelect,
    AccordionGroup,
    ModalWindow,
    Pagination,
    Speedometer,
    DynamicFormCreation,
    DynamicFormCreationFromJSON,
    ImageSlider,
    IndeterminateTreeStructure,
    ContextMenu,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[TempComp]
})
export class AppModule { }
