import { Injectable } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from 'src/model/mock-clients';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceClientService {

  constructor() { }

  getAll(){
      return CLIENTS;
    }

  getClientsDuConseiller(targetConseillerID) {
    var filteredclients = CLIENTS.filter(function (el) {
      return (el.conseiller === targetConseillerID);
      });
  return filteredclients;
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