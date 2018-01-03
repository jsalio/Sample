import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { SubscribableOrPromise } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { FirebaseApp } from 'angularfire2';
import { DatabaseReference } from 'angularfire2/database-deprecated/interfaces';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { promise } from 'selenium-webdriver';
import { Promise } from 'q';

@Injectable()
export class FireBaseProviderService {

  public _Schema: any;
  public _FilterSearch: any;
  public _SelectOne: Observable<any>;
  public _Keys: Observable<any>;
  public _existData: boolean;

  constructor(private firedb: AngularFireDatabase) {
  }

  public InitSchema(table: any): void {
    this._Schema = table;
  }

  public GetList(): Observable<any[]> {
    return this.firedb.list(this._Schema).valueChanges();
  }

  public getData(user: any): Observable<any> {
    // const _ref = this.firedb.database.ref(this._Schema);
    // _ref.orderByChild(this._FilterSearch).startAt(user).endAt(user).on('child_added', function (snap) {
    //   console.log(snap.toJSON());
    // });
    return this.firedb.list(this._Schema, ref => ref.orderByChild('UserName').equalTo('master13')).valueChanges();
  }

  public insertInSchema(structItem: any): any {
    const dbref = this.firedb.database.ref(this._Schema);
    const id = dbref.push(structItem);
    return id.key;
  }

  public GetId(structItem: any): void {
    const dbref = this.firedb.database.ref(this._Schema);
    console.log(this.existsEstruct(dbref, structItem, 'master13'));
  }

  public updateInSchema(structItem: any, refId: any): void {
    this.firedb.database.ref(this._Schema).child(refId).set(structItem).then();
  }

  public deleteNode(refId: any): void {
    this.firedb.database.ref(this._Schema).child(refId).remove().then();
  }

  public existsEstruct(dbref: DatabaseReference, newItem: any, refid: any) {
   this.firedb.list(this._Schema).valueChanges().subscribe(dta => {
      for ( let x = 0 ; x <= dta.length ; x++) {
        if (newItem === dta[x]) {
          return true;
        }
      }
    });
  }

  private unsubcribe(): void {
  }

  public dataExists(exists: boolean): void {
    this._existData = exists;
  }
}
