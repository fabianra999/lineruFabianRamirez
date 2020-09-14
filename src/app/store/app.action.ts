import { Action } from '@ngrx/store'
import { appState } from "./app.reducer";

export const NEWVALUE = 'Add tada';

export class Newvalue implements Action {
  readonly type = NEWVALUE;
  constructor(public payload: appState) { }
}


export type Actions = Newvalue;
