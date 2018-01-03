import { Observable } from 'rxjs/Observable';

export interface Ioperations {
    getList(): Observable<any>[];
    validateExists(): void;
}
