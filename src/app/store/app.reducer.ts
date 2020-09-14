import * as appAction from './app.action';

export interface appState {
  newValue: number,
  totalCredits: number
}

const initialState: appState = {
  newValue: 0,
  totalCredits:0
}

export function reducer(state: appState[] = [initialState], action: appAction.Actions ) {
  switch (action.type) {
    case appAction.NEWVALUE:
      return [ ...state,  action.payload];
      break;
    default:
      return state;
      break;
  }
}
