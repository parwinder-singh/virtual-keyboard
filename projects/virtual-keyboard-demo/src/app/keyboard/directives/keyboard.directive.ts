import {ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy, ViewContainerRef} from '@angular/core';
import {KeyboardContainerComponent} from "../keyboard-container/keyboard-container.component";
import {KeyboardService} from "../services/keyboard.service";
import {INPUT_ACTIONS} from "../interfaces/keyboard";
import {Subscription} from "rxjs";

@Directive({
  selector: '[virtualKeyboard]'
})
export class KeyboardDirective implements OnDestroy {
  @Input() numeric: boolean = false;
  keyboardRef: ComponentRef<KeyboardContainerComponent> | undefined;
  inputSubscription: Subscription | undefined;

  @HostListener('focus', ['$event']) onFocus(event: FocusEvent) {
    this.openVirtualKeyboard();
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
      if (this.isNumericField()) {
        this.keyboardRef.instance.isNumericField = true;
      }
      this.inputSubscription = this.keyboardService.getInput().subscribe((res: any) => {
        if (res.action === INPUT_ACTIONS.INPUT) {
          this.elementRef.nativeElement.value = res.data;
        } else if (res.action === INPUT_ACTIONS.CLOSE) {
          if (this.isNumericField()) {
            this.elementRef.nativeElement.value = +res.data;
          }
          this.closeVirtualKeyboard();
        }
      })
    } else {
      this.closeVirtualKeyboard();
    }
  }

  isNumericField() {
    return this.numeric;
  }

  closeVirtualKeyboard() {
    if (this.keyboardRef) {
      this.viewContainerRef.clear();
      this.keyboardRef = undefined;
      this.inputSubscription?.unsubscribe();
    }
  }

  ngOnDestroy() {
    if (this.inputSubscription) {
      this.inputSubscription.unsubscribe();
    }
  }

}
