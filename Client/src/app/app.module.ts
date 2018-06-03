import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ListTransaction } from "./transaction/list/list.component";

@NgModule({
  declarations: [
    AppComponent,
    ListTransaction
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
