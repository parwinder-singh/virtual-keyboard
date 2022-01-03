import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {EMIT_DATA} from "../interfaces/keyboard";

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  inputChange$ = new Subject();

  constructor() { }

  submitInput(input: EMIT_DATA) {
    this.inputChange$.next(input);
  }

  getInput() {
    return this.inputChange$.asObservable();
  }
}
