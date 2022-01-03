import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardContainerComponent } from './keyboard-container/keyboard-container.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {KeyboardDirective} from "./directives/keyboard.directive";


@NgModule({
  declarations: [
    KeyboardContainerComponent,
    KeyboardDirective
  ],
  exports: [
    KeyboardDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class KeyboardModule { }
