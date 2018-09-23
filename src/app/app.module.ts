import { NgModule } from '@angular/core';
import { MaterialModule } from './app.material.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';

import { PageNotFoundRouteComponent } from './routes/pagenotfound.route.component';
import { LandingRouteComponent } from './routes/landing.route.component';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    CardComponent,
    HeaderComponent,
    CardPlayerComponent,

    // Routes
    PageNotFoundRouteComponent,
    LandingRouteComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
