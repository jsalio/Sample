import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedTemplateModule } from './shared-template/shared-template.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
