import {Component, OnInit} from '@angular/core';
import {KeyboardService} from "../services/keyboard.service";
import {EMIT_DATA, INPUT_ACTIONS} from "../interfaces/keyboard";
import {KEYBOARD} from "../constants/keyboard";
import {KEY_ACTIONS} from "../enums/keyboard-actions";

export interface KEY {
  subKey: string,
  superKey: string,
  isActionButton: boolean,
  isCharacterKey: boolean,
  action: string | undefined,
}

@Component({
  selector: 'app-keyboard-container',
  templateUrl: './keyboard-container.component.html',
  styleUrls: ['./keyboard-container.component.scss']
})
export class KeyboardContainerComponent implements OnInit {
  keyAction = KEY_ACTIONS;
  capslockActive = false;
  shiftActive = false;
  inputValue = '';
  keyboardLayout = KEYBOARD;
  isNumericField = false;

  constructor(private keyboardService: KeyboardService) {
  }

  ngOnInit(): void {
  }

  handleKeyClick(event: any) {
    if (event.isActionButton) {
      switch (event.action) {
        case KEY_ACTIONS.CAPS: {
          this.toggleCapsLock();
          break;
        }
        case KEY_ACTIONS.SHIFT: {
          this.toggleShift();
          break;
        }
        case KEY_ACTIONS.BACKSPACE: {
          this.removeInputOneByOne();
          break;
        }
        case KEY_ACTIONS.ENTER: {
          this.addLineBreak();
          break;
        }
        case KEY_ACTIONS.CLEAR: {
          this.clearAllInput();
          break;
        }
        case KEY_ACTIONS.CLOSE: {
          this.closeKeyboard();
          break;
        }
        case KEY_ACTIONS.SPACE_BAR: {
          this.addSpace();
          break;
        }
      }
    } else {
      if (this.isNumericField) {
        if ((event.subKey === '.' && !this.inputValue.includes('.')) || (!isNaN(event.subKey))) {
          this.inputValue = this.inputValue.concat(event.subKey);
        }
      } else {
        if (event.isCharacterKey) {
          if ((this.shiftActive || this.capslockActive)) {
            this.inputValue = this.inputValue.concat(event.superKey);
          } else {
            this.inputValue = this.inputValue.concat(event.subKey);
          }
        } else {
          if (this.shiftActive) {
            this.inputValue = this.inputValue.concat(event.superKey);
          } else {
            this.inputValue = this.inputValue.concat(event.subKey);
          }
        }
      }

    }
    this.emitInputValue(INPUT_ACTIONS.INPUT);
  }

  removeInputOneByOne() {
    this.inputValue = this.inputValue.substring(0, this.inputValue.length - 1);
  }

  clearAllInput() {
    this.inputValue = '';
  }

  closeKeyboard() {
    const emitData: EMIT_DATA = {
      data: this.inputValue,
      action: INPUT_ACTIONS.CLOSE
    };
    this.keyboardService.submitInput(emitData)
  }

  addLineBreak() {
    if (this.notIsNumericField()) {
      this.inputValue = this.inputValue.concat(`\n`);
    }
  }

  notIsNumericField() {
    return !this.isNumericField;
  }

  addSpace() {
    if (this.notIsNumericField()) {
      this.inputValue = this.inputValue.concat(' ');
    }
  }

  emitInputValue(action: string) {
    const emitData: EMIT_DATA = {
      data: this.inputValue,
      action
    };
    this.keyboardService.submitInput(emitData)
  }

  originalOrder() {
    return 0;
  }

  toggleCapsLock() {
    this.capslockActive = !this.capslockActive;
  }

  toggleShift() {
    this.shiftActive = !this.shiftActive;
  }

}
