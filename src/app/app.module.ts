import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientModule } from './client/client.module';
import { ManagerModule } from './manager/manager.module';
import { ConseillerModule } from './conseiller/conseiller.module';

@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
=======
    AppComponent
>>>>>>> 81c6b0000ae5dc70f9b4a65b478900741326a47e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    ManagerModule,
<<<<<<< HEAD
    ConseillerModule,
=======
    ConseillerModule
>>>>>>> 81c6b0000ae5dc70f9b4a65b478900741326a47e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
