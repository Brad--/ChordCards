import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingRouteComponent } from './routes/landing.route.component';
import { PageNotFoundRouteComponent } from './routes/pagenotfound.route.component';

const appRoutes: Routes = [
    { path: 'landing', component: LandingRouteComponent },
    { 
      path: '', 
      redirectTo: '/landing',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundRouteComponent }
  ];

  @NgModule({
      imports: [
          RouterModule.forRoot(
              appRoutes,
              {
                  enableTracing: true // Debugging only
              }
          )
      ],
      exports: [
          RouterModule
      ],
      providers: []
  })
  export class AppRoutingModule { }