import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
  OnDestroy, Output,
  ViewContainerRef,
  EventEmitter
} from '@angular/core';
import {KeyboardContainerComponent} from "../keyboard-container/keyboard-container.component";
import {KeyboardService} from "../services/keyboard.service";
import {INPUT_ACTIONS} from "../interfaces/keyboard";
import {Subscription} from "rxjs";
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[virtualKeyboard]'
})
export class KeyboardDirective implements OnDestroy {
  @Input() numeric: boolean = false;
  @Input('disableVirtualKeyboard') isVirtualDisabled = false;
  @Output() onClose = new EventEmitter();
  @Output() onKeyClick = new EventEmitter();

  keyboardRef: ComponentRef<KeyboardContainerComponent> | undefined;
  inputSubscription: Subscription | undefined;
  ngControl: any;

  @HostListener('focus', ['$event']) onFocus(event: FocusEvent) {
    if (!this.isVirtualDisabled) {
      this.openVirtualKeyboard();
    }
  }

  @HostListener('keypress', ['$event']) onPress(event: FocusEvent) {
    if (!this.isVirtualDisabled) {
      event.preventDefault();
    }
  }

  constructor(private viewContainerRef: ViewContainerRef, private keyboardService: KeyboardService,
              private elementRef: ElementRef, private injector: Injector) {

  }

  openVirtualKeyboard() {
    if (this.isFormField()) {
      this.ngControl = this.injector.get(NgControl);
    }
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
          if (this.isFormField()) {
            (this.ngControl as NgControl).control?.setValue(res.data);
          }
          this.emitKeyPressEvent();
        } else if (res.action === INPUT_ACTIONS.CLOSE) {
          if (this.isNumericField()) {
            this.elementRef.nativeElement.value = +res.data;
            if (this.isFormField()) {
              (this.ngControl as NgControl).control?.setValue(+res.data);
            }
          }
          this.closeVirtualKeyboard();
          this.emitCloseEvent();
        }
      })
    } else {
      this.closeVirtualKeyboard();
    }
  }

  emitKeyPressEvent() {
    this.onKeyClick.emit({
      type: 'keyClick',
      element: this.elementRef,
      value: this.numeric ? +this.elementRef.nativeElement.value : this.elementRef.nativeElement.value,
    })
  }

  emitCloseEvent() {
    this.onClose.emit({
      type: 'close',
      element: this.elementRef,
      value: this.numeric ? +this.elementRef.nativeElement.value : this.elementRef.nativeElement.value
    })
  }

  isNumericField() {
    return this.numeric;
  }

  isFormField() {
    return this.elementRef.nativeElement.form;
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
