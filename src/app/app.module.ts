import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  // { path: 'home', component: HomeComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'events', component: EventsComponent},// canActivate:[AuthGuardService]},
  // { path: 'access-denied', component: AccessDeniedComponent},
  // { path: 'users', component: UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
