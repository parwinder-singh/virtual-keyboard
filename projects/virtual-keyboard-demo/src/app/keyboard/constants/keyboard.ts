import {KEY_ACTIONS} from "../enums/keyboard-actions";

export const KEYBOARD = [
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
];
