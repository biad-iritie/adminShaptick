import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent  } from './newpage/new.component';
import { EventComponent  } from './evenements/event.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'new',            component: NewComponent },
    { path: 'event',          component: EventComponent },
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
