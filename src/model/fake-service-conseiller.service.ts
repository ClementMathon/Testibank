import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Conseiller} from './conseiller';
import { Observable, throwError , of} from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class FakeServiceConseillerService {

  constructor(private http: HttpClient) {}
  fakeConseiller: Observable<Conseiller[]>;
  taillebase = 0;
  myAgentList: Conseiller[];
  myAdvisorByMle: Observable<Conseiller>;
  i: number;
 endpoint = 'http://localhost:8080/gestibankapp/';
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

private extractData(res: Response) {
  const body = res;
  return body || { };
}
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
    const uri = this.endpoint + 'conseiller/conseillers';

    this.fakeConseiller = this.http.get<Conseiller[]>(uri)
    .pipe(
    retry(1),
    catchError(this.handleError));
    return this.fakeConseiller;
  }
  addCounselor(myNewAdvisor: Conseiller): Observable <Conseiller> {
    const uri = this.endpoint + 'conseiller/conseillersadd';
    const jsonvari = JSON.parse(JSON.stringify(myNewAdvisor));
    return this.http.post<Conseiller>(uri, jsonvari);

  }
  deleteCounselor(myNewAdvisor: Conseiller): Observable<Conseiller[]> {
    const uri =  this.endpoint + 'conseiller/conseillersdelete/' + myNewAdvisor.consId;
    const jsonvari = JSON.parse(JSON.stringify(myNewAdvisor));
    return this.http.put<Conseiller[]>(uri, jsonvari);

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

  ModifCounselor(myNewAdvisor: Conseiller): Observable<Conseiller> {
    const uri = this.endpoint + 'conseiller/conseillersupdate';
    const jsonvari = JSON.parse(JSON.stringify(myNewAdvisor));
    return this.http.post<Conseiller>(uri, jsonvari);
  }
  GetCounselorByMle(mle: number): Observable<Conseiller> {
    const uri = this.endpoint + 'conseiller/conseillers/' + mle;

    this.myAdvisorByMle  = this.http.get<Conseiller>(uri)
    .pipe(
    retry(1),
    catchError(this.handleError));
    return this.myAdvisorByMle;

  }
}
