import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FireBaseProviderService } from './repository/data/cloud/fire-base-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  newItem = {
    UserName: 'xyz123',
    Passwd: '13@@qreds',
    Token: 'zd1qwr'
  };
  constructor(private firedbser: FireBaseProviderService) {
    this.firedbser._Schema = 'users';
    this.firedbser._FilterSearch = 'UserName';
    this.validateItemExist(this.newItem);
  }

  onStart() {
    this.firedbser.GetList().subscribe(data => console.log(data));
    this.firedbser.GetList().subscribe(data => {
      for (let x = 0; x < data.length; x++) {
        console.log(data[x]);
      }
    });
    this.firedbser.getData('master13').subscribe(data => console.log(data));
    const newItem = {
      UserName: 'xyz123',
      Passwd: '13@@qreds',
      Token: 'zd1qwr'
    };
    this.firedbser.updateInSchema(newItem, '-L1rJR8xtLQZ7Sa2IEIo');
    //  console.log( this.firedbser.insertInSchema(newItem));
  }

  validateItemExist(newItem: any) {
    this.firedbser.GetList().subscribe(function (data) {
      for (let x = 0; x < data.length; x++) {
        if (data[x].UserName === newItem.UserName) {
          console.log('Data already exist');
        }
      }
    });
  }
}
