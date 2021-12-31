import {ComponentRef, Directive, ElementRef, HostListener, OnDestroy, ViewContainerRef} from '@angular/core';
import {KeyboardContainerComponent} from "../keyboard-container/keyboard-container.component";
import {KeyboardService} from "../services/keyboard.service";
import {INPUT_ACTIONS} from "../interfaces/keyboard";
import {Subscription} from "rxjs";

@Directive({
  selector: '[virtualKeyboard]'
})
export class KeyboardDirective implements OnDestroy {
  keyboardRef: ComponentRef<KeyboardContainerComponent> | undefined;
  inputSubscription: Subscription | undefined;

  @HostListener('focus', ['$event']) onFocus(event: FocusEvent) {
    this.openVirtualKeyboard();
  }

  @HostListener('blur', ['$event']) onBlur(event: FocusEvent) {
  }

  constructor(private viewContainerRef: ViewContainerRef, private keyboardService: KeyboardService,
              private elementRef: ElementRef) {

  }

  openVirtualKeyboard() {
    if (!this.keyboardRef) {
      this.keyboardRef = this.viewContainerRef.createComponent(KeyboardContainerComponent);
      if (this.elementRef.nativeElement.value) {
        this.keyboardRef.instance.inputValue = this.elementRef.nativeElement.value;
      }
      this.inputSubscription = this.keyboardService.getInput().subscribe((res: any) => {
        if (res.action === INPUT_ACTIONS.INPUT) {
          this.elementRef.nativeElement.value = res.data;
        } else if (res.action === INPUT_ACTIONS.CLOSE) {
          this.closeVirtualKeyboard();
        }
      })
    }
  }

  closeVirtualKeyboard() {
    if (this.keyboardRef) {
      this.viewContainerRef.clear();
      this.keyboardRef = undefined;
    }
  }

  ngOnDestroy() {
    if (this.inputSubscription) {
      this.inputSubscription.unsubscribe();
    }
  }

}
