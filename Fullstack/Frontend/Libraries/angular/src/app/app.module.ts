import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Mycomponents/navbar/navbar.component';
import { CardsComponent } from './Mycomponents/cards/cards.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { CarouselsComponent } from './Mycomponents/carousels/carousels.component';
import { ButtonComponent } from './Mycomponents/button/button.component';
import { SpinnersComponent } from './Mycomponents/spinners/spinners.component';
import { BadgesComponent } from './Mycomponents/badges/badges.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    HomeComponent,
    AboutComponent,
    CarouselsComponent,
    ButtonComponent,
    SpinnersComponent,
    BadgesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
