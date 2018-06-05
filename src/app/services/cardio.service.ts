import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cardio } from '../cardio';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CardioService {

  private cardiosUrl = 'api/cardios';  // URL to web api

  constructor(
    private http: HttpClient) { }

    /** GET cardios from the server */
  getCardios (): Observable<Cardio[]> {
    return this.http.get<Cardio[]>(this.cardiosUrl)
      .pipe(
        catchError(this.handleError('getCardios', []))
      );
  }

  /** GET cardio by id. Will 404 if id not found */
  getCardio(id: number): Observable<Cardio> {
    const url = `${this.cardiosUrl}/${id}`;
    return this.http.get<Cardio>(url).pipe(
      catchError(this.handleError<Cardio>(`getCardio id=${id}`))
    );
  }

  /* GET cardioes whose name contains search term */
  searchCardios(term: string): Observable<Cardio[]> {
    
    if (!term.trim()) {
      // if not search term, return empty cardio array.
      return of([]);
    }
    return this.http.get<Cardio[]>(`api/cardios/?name=${term}`).pipe(
      catchError(this.handleError<Cardio[]>('searchCardios', []))
    );
  }

  filterCardios(params: string): Observable<Cardio[]>{
    if (!params.trim()) {
      // if not filter params, return empty cardio array.
      return of([]);
    }    
    return this.http.get<Cardio[]>(`api/cardios/?level=${params}`).pipe(
      catchError(this.handleError<Cardio[]>('filterCardios', []))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  

}
