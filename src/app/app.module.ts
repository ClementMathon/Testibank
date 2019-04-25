import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientModule } from './client/client.module';
import { ManagerModule } from './manager/manager.module';
import { ConseillerModule } from './conseiller/conseiller.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    ManagerModule,
    ConseillerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
