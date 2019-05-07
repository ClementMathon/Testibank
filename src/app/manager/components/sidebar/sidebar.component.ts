import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
         {
           path: '/manager/gestiondesagents',
           title: 'Fiche Agent',
           icon: 'content_paste',
           class: '',
         },
         {
           path: '/manager/affectation',
           title: 'affectation',
           icon: 'dashboard',
           class: '',
         },
         {
           path: '/manager/agent-profile',
           title: 'Ajouter un conseiller',
           icon: 'person',
           class: '',
         },

         {
           path: '/manager/modifierunagent',
           title: 'modifier un agent',
           icon: 'library_books',
           class: '',
         },
         {
           path: '/manager/suprimerunagent',
           title: 'suprimer un agent',
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
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if (window.innerWidth > 991) {
          return false;
      }
      return true;
  }
}
