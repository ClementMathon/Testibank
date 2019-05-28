import { getLocaleDateFormat } from '@angular/common';
import { Client } from './client';
import { Client2 } from './client2';

export class Notification {
    notificationId: number;
    notificationContenu: String;
    notificationDate: Date;
    client: Client2;

    constructor (notificationContenu: String, Client: Client2) {
        this.notificationId = 0;
        this.notificationContenu= notificationContenu;
        this.notificationDate = null;
        this.client = Client;

    };
}    