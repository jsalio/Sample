import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { SubscribableOrPromise } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { FirebaseApp } from 'angularfire2';
import { DatabaseReference } from 'angularfire2/database-deprecated/interfaces';

@Injectable()
export class FireBaseProviderService {

  public _Schema: any;
  public _FilterSearch: any;

  constructor(private firedb: AngularFireDatabase) {
  }

  public InitSchema(table: any): void {
    this._Schema = table;
  }

  public GetList(): Observable<any[]> {
    return this.firedb.list(this._Schema).valueChanges();
  }

  public getData(user: any): void {
    const _ref = this.firedb.database.ref(this._Schema);
    _ref.orderByChild(this._FilterSearch).startAt(user).endAt(user).on('child_added', function (snap) {
      console.log(snap.toJSON());
    });
  }

  public insertInSchema(structItem: any): any {
    const dbref = this.firedb.database.ref(this._Schema);
    const id = dbref.push(structItem);
    return id.key;
  }

  public updateInSchema(structItem: any, refId: any): void {
    const dbref = this.firedb.database.ref(this._Schema);
    if (this.existsEstruct(dbref, structItem, refId)) {
    }
  }

  private existsEstruct(dbref: DatabaseReference, newItem: any, refid: any): boolean {
    dbref.orderByChild(this._FilterSearch).startAt(refid).endAt(refid).on('child_added', function (snap) {
      return true;
    });
    return false;
  }
}
