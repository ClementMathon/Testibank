import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ManagerComponent } from './manager/manager.component';
import { ConseillerComponent } from './conseiller/conseiller.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ManagerComponent,
    ConseillerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
