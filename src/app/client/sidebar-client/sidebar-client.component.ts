import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { ClientComponent } from '../client.component';
import { ComptesComponent } from '../comptes/comptes.component';
import { VirementComponent } from '../virement/virement.component';
import { ProfilComponent } from '../profil/profil.component';
import { HistoriqueComponent } from '../historique/historique.component';
import { CommandesComponent } from '../commandes/commandes.component';
import { NotificationsComponent } from '../notifications/notifications.component';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const clientRoutes: RouteInfo[] = [
         {
           path: '/client/comptes',
           title: 'Comptes',
           icon: 'content_paste',
           class: '',
         },
         {
           path: '/client/virement',
           title: 'Virement',
           icon: 'dashboard',
           class: '',
         },
         {
           path: '/client/profil',
           title: 'Profil usager',
           icon: 'person',
           class: '',
         },

         {
           path: '/client/historique',
           title: 'Historique',
           icon: 'library_books',
           class: '',
         },
         {
           path: '/client/commandes',
           title: 'Commander',
           icon: 'bubble_chart',
           class: '',
         },
         {
          path: '/client/notifications',
          title: 'Notifications',
          icon: 'bubble_chart',
          class: '',
        },
         {
           path: '/invite',
           title: 'déconnecter',
           icon: 'notifications',
           class: '',
         },
       ];

@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.css']
})
export class SidebarClientComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
     this.menuItems = clientRoutes.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
        return false;
    }
    return true;
}
}
