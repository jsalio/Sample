import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { SubscribableOrPromise } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class FireBaseProviderService {

  public _Schema: any;
  public _Config: any;
  db: AngularFireDatabase;
  constructor(private firedb: AngularFireDatabase) {
    /*this._Config = firedb;*/
  }

  public InitSchema(table: any): void {
    this._Schema = table;
  }

  public GetList(): Observable<any[]> {
    return this.firedb.list(this._Schema).valueChanges();
  }

  public getData(): void {
    const t = this.firedb.database.ref(this._Schema).orderByChild('UserName').equalTo('Master13').toJSON();
    console.log(t);
  }

}
