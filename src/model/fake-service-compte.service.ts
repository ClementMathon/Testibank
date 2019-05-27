import { Injectable } from '@angular/core';
import { Compte } from './compte';
import { COMPTES } from 'src/model/mock-compte';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceCompteService {
  COMPTES: Observable<Compte[]>;
  taillebase = 0;
  myAdvisorByMle: Observable<Compte>;
  i: number;

  constructor(private http: HttpClient) { }

  /*getComptes(): Observable<Compte[]> {
    return of(COMPTES);
  }*/

  getComptesDuClient(targetClientID): Compte[] {
    return COMPTES.filter(compteclientvisé =>  compteclientvisé.idClient === targetClientID);
  }

  getAll(): Observable<Compte[]> {
      const uri = 'http://localhost:8080/Testibank/compte';
      this.COMPTES = this.http.get<Compte[]>(uri).pipe(
        retry(1),
        catchError(this.handleError)
      );
      return this.COMPTES;
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
