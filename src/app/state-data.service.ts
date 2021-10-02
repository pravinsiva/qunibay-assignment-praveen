import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StateDataService {

  private searchString$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  setSearchString(str) {
    this.searchString$.next(str);
  }
  getSearchString(): Observable<any> {
    return this.searchString$.asObservable();
  }


}
