import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login.module/login.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { UsersComponent } from './main/users/users.component';
import { UserItemComponent } from './main/users/user-item/user-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {SharedModule} from './shared/components/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    UsersComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
