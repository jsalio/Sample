import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeadComponent } from './menu-head/menu-head.component';
import { RightMenuComponent } from './right-menu/right-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuHeadComponent, RightMenuComponent]
})
export class SharedTemplateModule { }
