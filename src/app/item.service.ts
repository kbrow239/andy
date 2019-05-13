import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from './item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'api/items';

  constructor(
    private http: HttpClient
  ) { }

  getItems (): Observable<Item[]>{
      return this.http.get<Item[]>(this.itemsUrl)
        .pipe(
          catchError(this.handleError<Item[]>('getItems', []))
        );
  }

  addItem (item: Item): Observable<Item>{
    return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
      catchError(this.handleError<Item>('addItem'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  deleteItem (item : Item): Observable<Item> {
    const id = item.id;
    return this.http.delete<Item>(`${this.itemsUrl}/${item.id}`).pipe(
      catchError(this.handleError<Item>('deleteItem'))
    )
  }

  updateItem(item : Item): Observable<any>{
    return this.http.put(`${this.itemsUrl}/${item.id}`, item, httpOptions).pipe(
      catchError(this.handleError<Item>('updateItem'))
    );
  }
}
