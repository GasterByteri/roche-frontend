import { Type }      from '@angular/core';
import { AuthState } from './auth.state';

export {
  AuthStateModel,
  createDefaultAuthStateModel
}                                from './auth.state-model';
export { AuthState }             from './auth.state';
export { AUTH_STATE_IDENTIFIER } from './auth.state-identifier';
export { AuthSelector } from './auth.selector';
export const USER_NGXS_STATES: Type<any>[] = [
  AuthState,
]
