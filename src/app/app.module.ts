import { NgModule } from '@angular/core';
import { MaterialModule } from './app.material.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CardComponent } from './components/card/card.component';

import { PageNotFoundRouteComponent } from './routes/pagenotfound.route.component';
import { LandingRouteComponent } from './routes/landing.route.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,

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
