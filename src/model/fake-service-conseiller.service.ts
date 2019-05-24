import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Conseiller} from './conseiller';
import { Observable, throwError , of} from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class FakeServiceConseillerService {
  fakeConseiller: Observable<Conseiller[]>;
  taillebase = 0;
  myAdvisorByMle: Observable<Conseiller>;
  i: number;

  constructor(private http: HttpClient) {}
  taillebase2(): number {
    const uri = 'http://localhost:3000/conseillers';

    this.http.get(uri).subscribe(res => {
      while (res[this.taillebase] !== undefined) {
        this.taillebase++;
      }
    });
    return this.taillebase;
  }
  getAll(): Observable<Conseiller[]> {
    const uri = 'http://localhost:3000/conseillers';
    this.fakeConseiller = this.http.get<Conseiller[]>(uri).pipe(
      retry(1),
      catchError(this.handleError)
    );
    return this.fakeConseiller;
  }
  addCounselor(myNewAdvisor: Conseiller): Observable<Conseiller[]> {
    const uri = 'http://localhost:3000/conseillerinsert';
    const jsonvari = JSON.parse(JSON.stringify(myNewAdvisor));
    this.fakeConseiller = this.http.post<Conseiller[]>(uri, jsonvari);
    return this.fakeConseiller;
  }
  deleteCounselor(myNewAdvisor: Conseiller): Observable<Conseiller[]> {
    const uri = 'http://localhost:3000/conseillerdelete';
    const jsonvari = JSON.parse(JSON.stringify(myNewAdvisor));
    this.fakeConseiller = this.http.post<Conseiller[]>(uri, jsonvari);
    return this.fakeConseiller;
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

  ModifCounselor(myNewAdvisor: Conseiller): Observable<Conseiller[]> {
    const uri = 'http://localhost:3000/conseillersupdate';

    const jsonvari = JSON.parse(JSON.stringify(myNewAdvisor));

    this.fakeConseiller = this.http.put<Conseiller[]>(uri, jsonvari).pipe(
      retry(1),
      catchError(this.handleError)
    );
    return this.fakeConseiller;
  }
  GetCounselorByMle(mle: number): Observable<Conseiller> {
    this.myAdvisorByMle = this.fakeConseiller.filter(
      conseiller1 => conseiller1[0].cons_id === mle
    )[0];
    return this.myAdvisorByMle;
  }
}
