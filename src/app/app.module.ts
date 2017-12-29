import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './core/user/user.module';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FireBaseProviderService } from './repository/data/cloud/fire-base-provider.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyAg3FwnanfF7PaOzidzUIxJa4BL-ABCwNg',
  authDomain: 'storemarket-b39df.firebaseapp.com',
  databaseURL: 'https://storemarket-b39df.firebaseio.com',
  projectId: 'storemarket-b39df',
  storageBucket: 'storemarket-b39df.appspot.com',
  messagingSenderId: '334860482052'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CoreModule
  ],
  providers: [FireBaseProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
