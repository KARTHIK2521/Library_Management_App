import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ChartsComponent } from './charts/charts.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    AddBookComponent,
    ChartsComponent,
    ViewBookComponent,
    DeleteBookComponent,
    PageNotfoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
