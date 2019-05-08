import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { ManagerModule } from './manager/manager.module';
import { ConseillerModule } from './conseiller/conseiller.module';
import { GuestComponent } from './guest/guest.component';
import { FormulaireConnexionComponent } from './guest/formulaire-connexion/formulaire-connexion.component';
import { NotificationComponent } from './guest/notification/notification.component';
import { FormsModule }   from '@angular/forms';
import { TitreComponent } from './guest/titre/titre.component';
import { FondGuestComponent } from './guest/fond-guest/fond-guest.component';
import { InscriptionComponent } from './guest/inscription/inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    FormulaireConnexionComponent,
    NotificationComponent,
    TitreComponent,
    FondGuestComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    ManagerModule,
    ConseillerModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
