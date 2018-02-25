import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PersonListComponent } from './personlist/personlist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AddresslistComponent } from './addresslist/addresslist.component';
import { PersonService } from './personlist/person.service';
import { ElipsisPipe } from './elipsis.pipe';

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
    AddresslistComponent,
    ElipsisPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
