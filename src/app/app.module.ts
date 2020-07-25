import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular'; // Importing the Ag Grid Module
import { HttpClientModule } from '@angular/common/http'; // Importing the HTTP Client Module 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]), // Also add AgGridModule
    HttpClientModule  //  Also add HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
