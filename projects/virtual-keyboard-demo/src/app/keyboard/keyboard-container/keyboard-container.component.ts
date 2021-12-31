import {Component, OnInit} from '@angular/core';
import {KeyValue} from "@angular/common";
import {KeyboardService} from "../services/keyboard.service";
import {EMIT_DATA, INPUT_ACTIONS} from "../interfaces/keyboard";

export enum KEY_ACTIONS {
  CAPS = 'caps',
  ENTER = 'enter',
  SHIFT = 'shift',
  BACKSPACE = 'backspace',
  SPACE_BAR = 'space',
  CLEAR = 'clear',
  CLOSE = 'close'
}

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
  keyboardLayout = [
    {
      1: {
        subKey: '`', superKey: '~', isActionButton: false, isCharacterKey: false, action: undefined
      },
      2: {
        subKey: '1', superKey: '!', isActionButton: false, isCharacterKey: false, action: undefined
      },
      3: {
        subKey: '2', superKey: '@', isActionButton: false, isCharacterKey: false, action: undefined
      },
      4: {
        subKey: '3', superKey: '#', isActionButton: false, isCharacterKey: false, action: undefined
      },
      5: {
        subKey: '4', superKey: '$', isActionButton: false, isCharacterKey: false, action: undefined
      },
      6: {
        subKey: '5', superKey: '%', isActionButton: false, isCharacterKey: false, action: undefined
      },
      7: {
        subKey: '6', superKey: '^', isActionButton: false, isCharacterKey: false, action: undefined
      },
      8: {
        subKey: '7', superKey: '&', isActionButton: false, isCharacterKey: false, action: undefined
      },
      9: {
        subKey: '8', superKey: '*', isActionButton: false, isCharacterKey: false, action: undefined
      },
      10: {
        subKey: '9', superKey: '(', isActionButton: false, isCharacterKey: false, action: undefined
      },
      11: {
        subKey: '0', superKey: ')', isActionButton: false, isCharacterKey: false, action: undefined
      },
      12: {
        subKey: '-', superKey: '_', isActionButton: false, isCharacterKey: false, action: undefined
      },
      13: {
        subKey: '=', superKey: '+', isActionButton: false, isCharacterKey: false, action: undefined
      },
      14: {
        subKey: 'backspace', superKey: '', isActionButton: true, isCharacterKey: false, action: KEY_ACTIONS.BACKSPACE
      }
    },
    {
      1: {
        subKey: 'q', superKey: 'Q', isActionButton: false, isCharacterKey: true, action: undefined
      },
      2: {
        subKey: 'w', superKey: 'W', isActionButton: false, isCharacterKey: true, action: undefined
      },
      3: {
        subKey: 'e', superKey: 'E', isActionButton: false, isCharacterKey: true, action: undefined
      },
      4: {
        subKey: 'r', superKey: 'R', isActionButton: false, isCharacterKey: true, action: undefined
      },
      5: {
        subKey: 't', superKey: 'T', isActionButton: false, isCharacterKey: true, action: undefined
      },
      6: {
        subKey: 'y', superKey: 'Y', isActionButton: false, isCharacterKey: true, action: undefined
      },
      7: {
        subKey: 'u', superKey: 'U', isActionButton: false, isCharacterKey: true, action: undefined
      },
      8: {
        subKey: 'i', superKey: 'I', isActionButton: false, isCharacterKey: true, action: undefined
      },
      9: {
        subKey: 'o', superKey: 'O', isActionButton: false, isCharacterKey: true, action: undefined
      },
      10: {
        subKey: 'p', superKey: 'P', isActionButton: false, isCharacterKey: true, action: undefined
      },
      11: {
        subKey: '[', superKey: '{', isActionButton: false, isCharacterKey: false, action: undefined
      },
      12: {
        subKey: ']', superKey: '}', isActionButton: false, isCharacterKey: false, action: undefined
      },
      13: {
        subKey: '\\', superKey: '|', isActionButton: false, isCharacterKey: false, action: undefined
      }
    },
    {
      0: {
        subKey: 'caps lock', superKey: '', isActionButton: true, isCharacterKey: false, action: KEY_ACTIONS.CAPS
      },
      1: {
        subKey: 'a', superKey: 'A', isActionButton: false, isCharacterKey: true, action: undefined
      },
      2: {
        subKey: 's', superKey: 'S', isActionButton: false, isCharacterKey: true, action: undefined
      },
      3: {
        subKey: 'd', superKey: 'D', isActionButton: false, isCharacterKey: true, action: undefined
      },
      4: {
        subKey: 'f', superKey: 'F', isActionButton: false, isCharacterKey: true, action: undefined
      },
      5: {
        subKey: 'g', superKey: 'G', isActionButton: false, isCharacterKey: true, action: undefined
      },
      6: {
        subKey: 'h', superKey: 'H', isActionButton: false, isCharacterKey: true, action: undefined
      },
      7: {
        subKey: 'j', superKey: 'J', isActionButton: false, isCharacterKey: true, action: undefined
      },
      8: {
        subKey: 'k', superKey: 'K', isActionButton: false, isCharacterKey: true, action: undefined
      },
      9: {
        subKey: 'l', superKey: 'L', isActionButton: false, isCharacterKey: true, action: undefined
      },
      10: {
        subKey: ';', superKey: ':', isActionButton: false, isCharacterKey: false, action: undefined
      },
      11: {
        subKey: '\'', superKey: '"', isActionButton: false, isCharacterKey: false, action: undefined
      },
      12: {
        subKey: 'enter', superKey: '', isActionButton: true, isCharacterKey: false, action: KEY_ACTIONS.ENTER
      }
    },
    {
      1: {
        subKey: 'shift', superKey: '', isActionButton: true, isCharacterKey: false, action: KEY_ACTIONS.SHIFT
      },
      2: {
        subKey: 'z', superKey: 'Z', isActionButton: false, isCharacterKey: true, action: undefined
      },
      3: {
        subKey: 'x', superKey: 'X', isActionButton: false, isCharacterKey: true, action: undefined
      },
      4: {
        subKey: 'c', superKey: 'C', isActionButton: false, isCharacterKey: true, action: undefined
      },
      5: {
        subKey: 'v', superKey: 'V', isActionButton: false, isCharacterKey: true, action: undefined
      },
      6: {
        subKey: 'b', superKey: 'B', isActionButton: false, isCharacterKey: true, action: undefined
      },
      7: {
        subKey: 'n', superKey: 'N', isActionButton: false, isCharacterKey: true, action: undefined
      },
      8: {
        subKey: 'm', superKey: 'M', isActionButton: false, isCharacterKey: true, action: undefined
      },
      9: {
        subKey: ',', superKey: '<', isActionButton: false, isCharacterKey: false, action: undefined
      },
      10: {
        subKey: '.', superKey: '>', isActionButton: false, isCharacterKey: false, action: undefined
      },
      11: {
        subKey: '/', superKey: '?', isActionButton: false, isCharacterKey: false, action: undefined
      },
      12: {
        subKey: 'shift', superKey: '', isActionButton: true, isCharacterKey: false, action: KEY_ACTIONS.SHIFT
      },
    },
    {
      0: {
        subKey: 'clear', superKey: '', isActionButton: true, isCharacterKey: false, action: KEY_ACTIONS.CLEAR
      },
      1: {
        subKey: 'space', superKey: '', isActionButton: true, isCharacterKey: false, action: KEY_ACTIONS.SPACE_BAR
      },
      2: {
        subKey: 'close', superKey: '', isActionButton: true, isCharacterKey: false, action: KEY_ACTIONS.CLOSE
      },
    },
  ]

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
    this.inputValue = this.inputValue.concat(`\n`);
  }

  addSpace() {
    this.inputValue = this.inputValue.concat(' ');
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
