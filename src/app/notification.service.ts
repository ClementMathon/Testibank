import { Injectable } from '@angular/core';
import { Client2 } from 'src/model/client2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Notification } from 'src/model/notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  Client: Client2;
  uri = 'http://localhost:8080/Testibank/notification/';

  constructor(private http: HttpClient) { }
  
  notifCommandeChequier(notifCommandeChequier: Notification): Observable<Notification> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = { headers: headers };
    let uri2 = this.uri+'create';
    return this.http.post<Notification>(uri2, JSON.stringify(notifCommandeChequier), options);
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
