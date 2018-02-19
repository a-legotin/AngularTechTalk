import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PersonListComponent } from './personlist/personlist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AddresslistComponent } from './addresslist/addresslist.component';

const appRoutes: Routes = [
  { path: 'persons', component: PersonListComponent },
  { path: 'address', component: AddresslistComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    NotfoundComponent,
    HomeComponent,
    AddresslistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
