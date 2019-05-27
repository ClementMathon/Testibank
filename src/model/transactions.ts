import { Compte } from './compte';

export class Transactions {
    idTransaction: number;
    montantTransaction: number;
    dateTransaction: Date;
    typeTransaction: number;
    libelleTransaction: string;
    compteDestTransaction: Compte;
}