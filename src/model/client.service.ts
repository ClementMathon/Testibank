import {Injectable} from '@angular/core';
import {Client} from './client';
import {CLIENTS} from 'src/model/mock-clients';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Client2} from './client2';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  returnedClientList: Observable<Client2[]>;
  numberofclientbyconselor: Observable<number>;
  returnedClient: Observable<Client2>;
  clientId: Observable<number>;
  i: number;
  essai: "string";
  webserviceRoot = 'http://localhost:8080/gestibankapp/clients/'; // =========================== recine du webservice, à changer si besoin =============================
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

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

  addClient(clientToAdd: Client2) {
    const uri = this.webserviceRoot + 'create';
    const jsonvari = JSON.parse(JSON.stringify(clientToAdd));
    return this.http.post(uri, jsonvari);
  }

  getAll(): Observable<Client2[]> {
    const uri = this.webserviceRoot + 'getall';
    this.returnedClientList = this.http.get<Client2[]>(uri).pipe(
      retry(1),
      catchError(this.handleError)
    );
    return this.returnedClientList;
  }
  getClientsWithoutConseiller(): Observable<Client2[]> {
    const uri = this.webserviceRoot + 'getallclientwithoutconseiller';
    this.returnedClientList = this.http.get<Client2[]>(uri).pipe(
      retry(1),
      catchError(this.handleError)
    );
    return this.returnedClientList;
  }

  getClientsDuConseiller(targetConseillerID: number): Observable<number> {
    const uri =
      this.webserviceRoot +
      'findNumberofClientbyconseillerid/' +
      targetConseillerID;
    this.numberofclientbyconselor = this.http.get<number>(uri).pipe(
      retry(1),
      catchError(this.handleError)
    );

    return this.numberofclientbyconselor;
  }

  updateClient(clientToUpdate: Client2): Observable<Client2>{
    // const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // const options = {headers};
    const uri = this.webserviceRoot + 'updateclient';
    const jsonvari = JSON.parse(JSON.stringify(clientToUpdate));

    return this.http.post<Client2>(uri, jsonvari);
  }

  deleteClient(IdClientToDelete: number) {
    const uri = this.webserviceRoot + 'deletebyid/' + IdClientToDelete;
    this.http.get(uri);
  }
  getClientById(idClient) {
    const uri = this.webserviceRoot + 'findbyid/' + idClient;
    return this.http.get<Client2>(uri).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
}

/* ==========================   ancienne méthode d'instanciation, maintenant dans mock-clients ==============================================

const fakeClient = [
		  new Client(0, 'pwd', 'Leault', 'Jérémie', 'jeremie.leault@gmail.com', 706060606, '28 rue de GK', 69007, 'Lyon', 'celibataire', 0, 0 ),
      new Client(1, 'stephane', 'Indienne', 'Ananthee', 'ana@gmail.com', 606060606, '8 rue GK', 69007, 'Lyon', 'celibataire', 0, 1),
      new Client(1, 'pwd', 'Macron', 'Emmanuel', 'jmanu@gmail.com', 706060606, '8 rue de Paris', 69007, 'Lyon', 'celibataire', 0, 2 ),
      new Client(3, 'pwd', 'Sarko', 'Niko', 'sarkot@gmail.com', 706060606, '28 rue de GK', 69007, 'Lyon', 'celibataire', 0, 0 ),
      new Client(4, 'pwd', 'Hollande', 'François', 'François@gmail.com', 706060606, '30 rue de GK', 69007, 'Lyon', 'celibataire', 0, 1 ),
      new Client(5, 'pwd', 'Chirac', 'Jack', 'jack@gmail.com', 706060606, '28 rue de GK', 69007, 'Lyon', 'celibataire', 0, 1 ),
      new Client(6, 'pwd', 'Mitterand', 'François', 'FrançoisM@gmail.com', 706060606, '28 rue de GK', 69007, 'Lyon', 'celibataire', 0, 2 ),
      new Client(7, 'pwd', 'DeGaulle', 'Général', 'vivelafrance@gmail.com', 706060606, '28 rue de GK', 69007, 'Lyon', 'celibataire', 0, 0 )
		]
		return fakeClient;*/
