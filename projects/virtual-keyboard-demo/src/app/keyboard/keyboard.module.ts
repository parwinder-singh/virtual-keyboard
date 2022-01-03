import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardContainerComponent } from './keyboard-container/keyboard-container.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    KeyboardContainerComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class KeyboardModule { }
