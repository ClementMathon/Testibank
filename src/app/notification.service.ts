import { Injectable } from '@angular/core';
import { Client2 } from 'src/model/client2';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  Client: Client2;
  uri = 'http://localhost:8080/Testibank/compte';

  constructor(private http: HttpClient) { }
  /*
  notifCommandeChequier(targetClientID) {
    const uri2 = this.uri+ '/findAllComptesByClientId/' + targetClientID;
    return this.http.get<Compte[]>(uri2).pipe(retry(1), catchError(this.handleError));
  }
*/
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
