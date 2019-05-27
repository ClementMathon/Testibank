import { Injectable } from '@angular/core';
import { Compte } from './compte';

import { Observable, throwError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, tap } from 'rxjs/operators';
import { Transactions } from './transactions';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceCompteService {
  COMPTES: Observable<Compte[]>;
  taillebase = 0;
  i: number;
  uri = 'http://localhost:8080/Testibank/compte';

  constructor(private http: HttpClient) {

   }

  /*getComptes(): Observable<Compte[]> {
    return of(COMPTES);
  }*/

  getComptesDuClient(targetClientID) {
    const uri2 = this.uri+ '/findAllComptesByClientId/' + targetClientID;
    return this.http.get<Compte[]>(uri2).pipe(retry(1), catchError(this.handleError));
  }
  getTransactionsDuCompte(compteID){
    const uri2 = this.uri+ '/findAllTransactionsByCompteId/' + compteID;
    return this.http.get<Transactions[]>(uri2).pipe(retry(1), catchError(this.handleError));
  }

  getAll() {
    const uri2 = this.uri+ '/getAll' ;
      return this.http.get<Compte[]>(uri2).pipe(retry(1), catchError(this.handleError));
    } 
  
    handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);

    }
}
