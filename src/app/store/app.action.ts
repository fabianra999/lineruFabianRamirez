import { Action } from '@ngrx/store';


export const NEWVALUE = '[appStore] 0';

export class Newvalue implements Action {
  readonly type = NEWVALUE;
  constructor(public payload: number) { }
}


export type mensajeAction = Newvalue;
