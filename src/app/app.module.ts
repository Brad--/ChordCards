import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './app.material.module';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
