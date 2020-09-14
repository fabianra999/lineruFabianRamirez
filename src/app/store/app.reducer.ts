import { destroyPlatform } from '@angular/core';
import { Action } from "@ngrx/store";
import * as appAction from './app.action';

export interface appState {
  newValue: number
}

export const initialState = {
  newValue: 0
}

export function reducer(state: appState = initialState, action: appAction.mensajeAction) {
  switch (action.type) {
    case appAction.NEWVALUE:
      return {
        ...state,
        newValue: action.payload
      }
      break;
      default:
      return state;
      break;
  }
}
