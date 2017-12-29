import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SharedTemplateModule } from '../shared-template/shared-template.module';
import { CoreRoutingModule } from './core-routing.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedTemplateModule,
    UserModule
  ],
  declarations: [IndexComponent]
})
export class CoreModule { }
