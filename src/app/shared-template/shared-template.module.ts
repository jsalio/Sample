import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeadComponent } from './menu-head/menu-head.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { UnknowUrlComponent } from './unknow-url/unknow-url.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuHeadComponent,
    RightMenuComponent,
    UnknowUrlComponent
  ],
  exports: [
    MenuHeadComponent,
    RightMenuComponent,
    UnknowUrlComponent
  ]
})
export class SharedTemplateModule { }
