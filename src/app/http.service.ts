import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // headers = new HttpHeaders();
  constructor(
    private http: HttpClient
  ) {
    
    // this.headers.append('Access-Control-Allow-Origin', '*');
    // this.headers.append('Access-Control-Allow-Credentials', 'true');
    // this.headers.append('Access-Control-Allow-Methods', 'GET, DELETE, HEAD, OPTIONS');
    // this.headers.append('X-Requested-With', 'XMLHttpRequest');
   }
    url = 'https://www.blibli.com/backend/search/products?';
  getList(searchTerm,start): Observable<any> {
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Credentials', 'true')
  .set('X-Requested-With', 'XMLHttpRequest')
  .set('Access-Control-Allow-Methods', 'GET, DELETE, HEAD, OPTIONS');
    const params = new HttpParams()
      .set('searchTerm', searchTerm)
      .set('start', start)
      .set('itemPerPage', '24');
    return this.http.get<any>(this.url,{params, 'headers': headers});
  }
}
