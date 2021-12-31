import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyboardDirective } from './keyboard/directives/keyboard.directive';
import {KeyboardModule} from "./keyboard/keyboard.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    KeyboardDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    KeyboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
